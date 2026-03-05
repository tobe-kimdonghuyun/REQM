(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Template01");
            this.set_titletext("List-Detail1");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1792);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Page Title");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","60","54","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사원번호");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","94","24","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("입력해주세요");
            obj.set_flexgrow("1");
            obj.set_text("입력해주세요");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel030","9","290","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","70","64","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","718","246","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_flexgrow("1");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","0","0",null,"48","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_Sch");
            obj.set_flexgrow("1");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01",null,"4","40","40","4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","436","290","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Div01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","80","74","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","1102","245","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_flexgrow("1");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_02","437","10","280","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_horizontalgap("10");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel010","24","24","100%","112",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel030\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1215","590","500","48",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","1325","590","48","48",null,null,"48",null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_Reset");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","1313","220","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","Static00:48",null,"264","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_SchBar");
            obj.set_tablecellarea("");
            obj.set_horizontalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxisalign("center");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel010\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","Panel00:40",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Heading Title2 ");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","590","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("서브타이틀");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("사진");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","171","557","100%","296",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel11","0","0","100%","328",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07\"/><PanelItem id=\"PanelItem01\" componentid=\"ImageViewer00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","10","41","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","406","560","78","48",null,null,"78",null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("버튼");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","24","841","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_horizontalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Edit01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","24","521","214","392",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_type("horizontal");
            obj.set_verticalgap("16");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel11\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("성명(한글)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","785","558","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","690","1031","184","80",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_01","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("성명(영어)");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","1027","580","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_02","10","10","184","80",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01_02","27","757","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_03","492","10","184","80",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo01_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01_03","27","757","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_04","10","113","184","80",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo01_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_04","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","548","777","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_flexgrow("1");
            obj.set_popupsize("384 437");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_05","492","113","184","80",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_05","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("재직상태");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","1212","665","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_06","10","216","184","80",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_05\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_07","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("사무실번호");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","1104","867","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_format("@@) @@@@-@@@@");
            obj.set_type("string");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("02)1234-5678");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_08","10","319","184","80",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_07\"/><PanelItem id=\"PanelItem01\" componentid=\"MaskEdit01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_08","27","726","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("팩스번호");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01_01","1104","867","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_format("@@) @@@@-@@@@");
            obj.set_type("string");
            obj.set_flexgrow("1");
            obj.set_displaynulltext("02)1234-5678");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_10","372","216","184","80",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static07_08\"/><PanelItem id=\"PanelItem01\" componentid=\"MaskEdit01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","678","574","214","392",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_horizontalgap("16");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02_03\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel02_04\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel02_05\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel02_06\"/><PanelItem id=\"PanelItem08\" componentid=\"Panel02_08\"/><PanelItem id=\"PanelItem09\" componentid=\"Panel02_10\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","40","143","100%","392",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Static02:40",null,"534","0",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_tablecellarea("0/0");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_spacing("39px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem10\" componentid=\"Static06\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel06\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","0","590","808","38",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("서브타이틀 상세");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_tablecellarea("0/0");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_01","87","786","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","622","898","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_format("@@@-@@@@-@@@@");
            obj.set_type("string");
            obj.set_displayinvalidtext("invalid value");
            obj.set_displaynulltext("010-1234-5678");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_01","492","216","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static08_01\"/><PanelItem id=\"PanelItem01\" componentid=\"MaskEdit00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_02","117","816","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("이메일");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04_00","498","881","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_displaynulltext("tobesoft@tobesoft.com");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_02","734","216","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static08_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit04_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_03","127","826","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("생년월일");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04_02","508","891","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_displaynulltext("1990.01.01");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_03","20","329","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static08_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit04_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_04","137","836","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("우편번호");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04_03","518","901","294","48",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","477","1236","78","48",null,null,"78",null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08","0","19","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Edit04_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Button03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_04","372","319","253","80",null,null,"253",null,null,null,this);
            obj.set_taborder("65");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static08_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel08\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_05","137","836","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("주소");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04_04","518","901","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_05","10","113","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static08_05\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit04_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel12","0","208","808","80",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_horizontalgap("24");
            obj.set_flexgrow("1");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Panel07_04\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel07_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_06","127","826","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("성별");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","157","1336","172","48",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "남성"},{"codecolumn" : "1","datacolumn" : "여성"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_06","974","10","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static08_06\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_07_00","127","826","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("결혼유무");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00","157","1336","172","48",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_flexgrow("1");
            var Radio00_00_00_innerdataset = new nexacro.NormalDataset("Radio00_00_00_innerdataset", obj);
            Radio00_00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "미혼"},{"codecolumn" : "1","datacolumn" : "기혼"}]});
            obj.set_innerdataset(Radio00_00_00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","671","1341","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_enable("false");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","699","1344","20","48",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("명");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel10","504","1311","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_horizontalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Radio00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Spin00\"/><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_07_00","492","216","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static08_07_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel10\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_07","127","826","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("외국어");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","1041","1318","77","48",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("영어");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","10","41","94","48",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("일본어");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00","87","10","94","48",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("중국어");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09","986","1311","265","48",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox00\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"CheckBox00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_07","986","1280","253","80",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static08_07\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel09\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static08_05_00","137","836","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("비고");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","22","1414","100.00%","144",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_05_00","22","1383","1431","176",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_type("horizontal");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static08_05_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_00","22","1074","100%","528",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem07\" componentid=\"Panel07_01\"/><PanelItem id=\"PanelItem10\" componentid=\"Panel07_02\"/><PanelItem id=\"PanelItem11\" componentid=\"Panel07_03\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel12\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel07_06\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel07_07_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel07_07\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel07_05_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","Panel01:40",null,"630","0",null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_spacing("39px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem10\" componentid=\"Static06_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel07_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","64","1436","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("생성");
            obj.set_cssclass("btn_WF_CrudNew");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01_00","407","1450","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CrudModify");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","508","1443","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CrudSave");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01","614","1452","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CrudDelete");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","Panel02:40",null,"48","0%",null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button02_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button02\"/><PanelItem id=\"PanelItem03\" componentid=\"Button02_01\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit03.set_taborder("0");
                p.Edit03.set_cssclass("edt_WF_Sch");
                p.Edit03.set_flexgrow("1");
                p.Edit03.move("0","0",null,"48","0",null);

                p.Button01.set_taborder("1");
                p.Button01.set_cssclass("btn_WF_EdtSch");
                p.Button01.move(null,"4","40","40","4",null);
            	}
            );
            this.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1792,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("List-Detail1");

                p.Static00.set_taborder("0");
                p.Static00.set_text("Page Title");
                p.Static00.set_cssclass("sta_WF_H2_pc");
                p.Static00.set_fittocontents("height");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("0","0",null,"60","0",null);

                p.Static04.set_taborder("1");
                p.Static04.set_text("사원번호");
                p.Static04.set_cssclass("sta_WF_SchDetail");
                p.Static04.set_flexshrink("0");
                p.Static04.move("60","54","100","48",null,null);

                p.Edit00.set_taborder("2");
                p.Edit00.set_value("입력해주세요");
                p.Edit00.set_flexgrow("1");
                p.Edit00.set_maxwidth("");
                p.Edit00.move("94","24","100%","48",null,null);

                p.Panel030.set_taborder("3");
                p.Panel030.set_horizontalgap("10");
                p.Panel030.set_flexgrow("1");
                p.Panel030.set_maxwidth("");
                p.Panel030.move("9","290","280","48",null,null);

                p.Static04_00.set_taborder("4");
                p.Static04_00.set_text("부서");
                p.Static04_00.set_cssclass("sta_WF_SchDetail");
                p.Static04_00.set_flexshrink("0");
                p.Static04_00.move("70","64","100","48",null,null);

                p.Div01.set_taborder("5");
                p.Div01.set_text("Div01");
                p.Div01.set_flexgrow("1");
                p.Div01.set_accessibilityenable("false");
                p.Div01.move("718","246","100%","48",null,null);

                p.Panel03_01.set_taborder("6");
                p.Panel03_01.set_horizontalgap("10");
                p.Panel03_01.set_flexgrow("1");
                p.Panel03_01.set_maxwidth("");
                p.Panel03_01.move("436","290","280","48",null,null);

                p.Static04_00_00.set_taborder("7");
                p.Static04_00_00.set_text("성명");
                p.Static04_00_00.set_cssclass("sta_WF_SchDetail");
                p.Static04_00_00.set_flexshrink("0");
                p.Static04_00_00.move("80","74","100","48",null,null);

                p.Edit03.set_taborder("8");
                p.Edit03.set_flexgrow("1");
                p.Edit03.set_cssclass("essential");
                p.Edit03.move("1102","245","100%","48",null,null);

                p.Panel03_02.set_taborder("9");
                p.Panel03_02.set_horizontalgap("10");
                p.Panel03_02.set_flexgrow("1");
                p.Panel03_02.set_maxwidth("");
                p.Panel03_02.move("437","10","280","48",null,null);

                p.Panel010.set_taborder("10");
                p.Panel010.set_flexwrap("wrap");
                p.Panel010.set_verticalgap("16");
                p.Panel010.set_fittocontents("height");
                p.Panel010.set_flexgrow("1");
                p.Panel010.set_horizontalgap("16");
                p.Panel010.set_maxwidth("");
                p.Panel010.move("24","24","100%","112",null,null);

                p.Button00.set_taborder("11");
                p.Button00.set_text("조회하기");
                p.Button00.set_cssclass("btn_WF_Sch");
                p.Button00.set_flexgrow("1");
                p.Button00.set_maxwidth("");
                p.Button00.move("1215","590","500","48",null,null);

                p.Button00_00.set_taborder("12");
                p.Button00_00.set_cssclass("btn_WF_Reset");
                p.Button00_00.set_enable("true");
                p.Button00_00.set_minwidth("48");
                p.Button00_00.set_maxwidth("");
                p.Button00_00.move("1325","590","48","48",null,null);

                p.Panel01_00.set_taborder("13");
                p.Panel01_00.set_horizontalgap("8");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_flexcrossaxisalign("center");
                p.Panel01_00.set_maxheight("");
                p.Panel01_00.set_maxwidth("");
                p.Panel01_00.move("1313","220","100%","48",null,null);

                p.Panel00.set_taborder("14");
                p.Panel00.set_spacing("40px");
                p.Panel00.set_cssclass("pnl_WF_SchBar");
                p.Panel00.set_tablecellarea("");
                p.Panel00.set_horizontalgap("16");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexmainaxisalign("center");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_verticalgap("24");
                p.Panel00.move("0","Static00:48",null,"264","0",null);

                p.Static02.set_taborder("15");
                p.Static02.set_text("Heading Title2 ");
                p.Static02.set_cssclass("sta_WF_H3_pc");
                p.Static02.set_fittocontents("height");
                p.Static02.set_accessibilityrole("heading3");
                p.Static02.move("0","Panel00:40",null,"48","0",null);

                p.Static06.set_taborder("16");
                p.Static06.set_text("서브타이틀");
                p.Static06.set_positionstep("0");
                p.Static06.set_cssclass("sta_WF_H4_pc");
                p.Static06.set_flexgrow("1");
                p.Static06.set_fittocontents("height");
                p.Static06.set_accessibilityrole("heading4");
                p.Static06.set_maxwidth("");
                p.Static06.move("0","590","100%","38",null,null);

                p.Static07.set_taborder("17");
                p.Static07.set_text("사진");
                p.Static07.set_cssclass("sta_WF_Label");
                p.Static07.set_flexgrow("1");
                p.Static07.move("27","726","100%","24",null,null);

                p.ImageViewer00.set_taborder("18");
                p.ImageViewer00.set_text("");
                p.ImageViewer00.set_flexgrow("1");
                p.ImageViewer00.move("171","557","100%","296",null,null);

                p.Panel11.set_taborder("19");
                p.Panel11.set_flexwrap("wrap");
                p.Panel11.set_flexgrow("1");
                p.Panel11.set_verticalgap("8");
                p.Panel11.move("0","0","100%","328",null,null);

                p.Edit01_00.set_taborder("20");
                p.Edit01_00.set_flexgrow("1");
                p.Edit01_00.move("10","41","120","48",null,null);

                p.Button01.set_taborder("21");
                p.Button01.set_text("버튼");
                p.Button01.set_minwidth("78");
                p.Button01.set_maxwidth("");
                p.Button01.move("406","560","78","48",null,null);

                p.Panel05.set_taborder("22");
                p.Panel05.set_horizontalgap("8");
                p.Panel05.set_flexgrow("1");
                p.Panel05.move("24","841","100%","48",null,null);

                p.Panel02_00.set_taborder("23");
                p.Panel02_00.set_type("horizontal");
                p.Panel02_00.set_verticalgap("16");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.set_flexwrap("wrap");
                p.Panel02_00.set_minwidth("");
                p.Panel02_00.move("24","521","214","392",null,null);

                p.Static07_00.set_taborder("24");
                p.Static07_00.set_text("성명(한글)");
                p.Static07_00.set_cssclass("sta_WF_Label");
                p.Static07_00.set_flexgrow("1");
                p.Static07_00.move("27","726","100%","24",null,null);

                p.Edit01.set_taborder("25");
                p.Edit01.set_flexgrow("1");
                p.Edit01.move("785","558","100%","48",null,null);

                p.Panel02_01.set_taborder("26");
                p.Panel02_01.set_type("horizontal");
                p.Panel02_01.set_verticalgap("8");
                p.Panel02_01.set_flexgrow("1");
                p.Panel02_01.set_flexwrap("wrap");
                p.Panel02_01.set_maxwidth("");
                p.Panel02_01.move("690","1031","184","80",null,null);

                p.Static07_01.set_taborder("27");
                p.Static07_01.set_text("성명(영어)");
                p.Static07_01.set_cssclass("sta_WF_Label");
                p.Static07_01.set_flexgrow("1");
                p.Static07_01.move("27","726","100%","24",null,null);

                p.Edit02.set_taborder("28");
                p.Edit02.set_flexgrow("1");
                p.Edit02.move("1027","580","100%","48",null,null);

                p.Panel02_02.set_taborder("29");
                p.Panel02_02.set_type("horizontal");
                p.Panel02_02.set_verticalgap("8");
                p.Panel02_02.set_flexgrow("1");
                p.Panel02_02.set_flexwrap("wrap");
                p.Panel02_02.set_maxwidth("");
                p.Panel02_02.move("10","10","184","80",null,null);

                p.Static07_02.set_taborder("30");
                p.Static07_02.set_text("부서");
                p.Static07_02.set_cssclass("sta_WF_Label");
                p.Static07_02.set_flexgrow("1");
                p.Static07_02.move("27","726","100%","24",null,null);

                p.Combo01_02.set_taborder("31");
                p.Combo01_02.set_flexgrow("1");
                p.Combo01_02.set_displaynulltext("선택");
                p.Combo01_02.set_value("");
                p.Combo01_02.set_index("-1");
                p.Combo01_02.move("27","757","100%","48",null,null);

                p.Panel02_03.set_taborder("32");
                p.Panel02_03.set_type("horizontal");
                p.Panel02_03.set_verticalgap("8");
                p.Panel02_03.set_flexgrow("1");
                p.Panel02_03.set_flexwrap("wrap");
                p.Panel02_03.set_maxwidth("");
                p.Panel02_03.move("492","10","184","80",null,null);

                p.Static07_03.set_taborder("33");
                p.Static07_03.set_text("직급");
                p.Static07_03.set_cssclass("sta_WF_Label");
                p.Static07_03.set_flexgrow("1");
                p.Static07_03.move("27","726","100%","24",null,null);

                p.Combo01_03.set_taborder("34");
                p.Combo01_03.set_flexgrow("1");
                p.Combo01_03.set_displaynulltext("선택");
                p.Combo01_03.set_value("");
                p.Combo01_03.set_index("-1");
                p.Combo01_03.move("27","757","100%","48",null,null);

                p.Panel02_04.set_taborder("35");
                p.Panel02_04.set_type("horizontal");
                p.Panel02_04.set_flexwrap("wrap");
                p.Panel02_04.set_verticalgap("8");
                p.Panel02_04.set_flexgrow("1");
                p.Panel02_04.set_maxwidth("");
                p.Panel02_04.move("10","113","184","80",null,null);

                p.Static07_04.set_taborder("36");
                p.Static07_04.set_text("입사일자");
                p.Static07_04.set_cssclass("sta_WF_Label");
                p.Static07_04.set_flexgrow("1");
                p.Static07_04.move("27","726","100%","24",null,null);

                p.Calendar00.set_taborder("37");
                p.Calendar00.set_flexgrow("1");
                p.Calendar00.set_popupsize("384 437");
                p.Calendar00.move("548","777","100%","48",null,null);

                p.Panel02_05.set_taborder("38");
                p.Panel02_05.set_type("horizontal");
                p.Panel02_05.set_verticalgap("8");
                p.Panel02_05.set_flexgrow("1");
                p.Panel02_05.set_flexwrap("wrap");
                p.Panel02_05.set_maxwidth("");
                p.Panel02_05.move("492","113","184","80",null,null);

                p.Static07_05.set_taborder("39");
                p.Static07_05.set_text("재직상태");
                p.Static07_05.set_cssclass("sta_WF_Label");
                p.Static07_05.set_flexgrow("1");
                p.Static07_05.move("27","726","100%","24",null,null);

                p.Combo00.set_taborder("40");
                p.Combo00.set_flexgrow("1");
                p.Combo00.set_displaynulltext("선택");
                p.Combo00.set_value("");
                p.Combo00.set_index("-1");
                p.Combo00.move("1212","665","100%","48",null,null);

                p.Panel02_06.set_taborder("41");
                p.Panel02_06.set_type("horizontal");
                p.Panel02_06.set_verticalgap("8");
                p.Panel02_06.set_flexgrow("1");
                p.Panel02_06.set_flexwrap("wrap");
                p.Panel02_06.set_maxwidth("");
                p.Panel02_06.move("10","216","184","80",null,null);

                p.Static07_07.set_taborder("42");
                p.Static07_07.set_cssclass("sta_WF_Label");
                p.Static07_07.set_text("사무실번호");
                p.Static07_07.set_flexgrow("1");
                p.Static07_07.move("27","726","100%","24",null,null);

                p.MaskEdit01.set_taborder("43");
                p.MaskEdit01.set_format("@@) @@@@-@@@@");
                p.MaskEdit01.set_type("string");
                p.MaskEdit01.set_flexgrow("1");
                p.MaskEdit01.set_displaynulltext("02)1234-5678");
                p.MaskEdit01.move("1104","867","100%","48",null,null);

                p.Panel02_08.set_taborder("44");
                p.Panel02_08.set_type("horizontal");
                p.Panel02_08.set_verticalgap("8");
                p.Panel02_08.set_flexgrow("1");
                p.Panel02_08.set_flexwrap("wrap");
                p.Panel02_08.set_maxwidth("");
                p.Panel02_08.move("10","319","184","80",null,null);

                p.Static07_08.set_taborder("45");
                p.Static07_08.set_cssclass("sta_WF_Label");
                p.Static07_08.set_text("팩스번호");
                p.Static07_08.set_flexgrow("1");
                p.Static07_08.move("27","726","100%","24",null,null);

                p.MaskEdit01_01.set_taborder("46");
                p.MaskEdit01_01.set_format("@@) @@@@-@@@@");
                p.MaskEdit01_01.set_type("string");
                p.MaskEdit01_01.set_flexgrow("1");
                p.MaskEdit01_01.set_displaynulltext("02)1234-5678");
                p.MaskEdit01_01.move("1104","867","100%","48",null,null);

                p.Panel02_10.set_taborder("47");
                p.Panel02_10.set_type("horizontal");
                p.Panel02_10.set_verticalgap("8");
                p.Panel02_10.set_flexwrap("wrap");
                p.Panel02_10.set_flexgrow("1");
                p.Panel02_10.set_maxwidth("");
                p.Panel02_10.move("372","216","184","80",null,null);

                p.Panel04.set_taborder("48");
                p.Panel04.set_horizontalgap("16");
                p.Panel04.set_verticalgap("24");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_fittocontents("height");
                p.Panel04.set_flexgrow("2");
                p.Panel04.move("678","574","214","392",null,null);

                p.Panel06.set_taborder("49");
                p.Panel06.set_horizontalgap("24");
                p.Panel06.set_verticalgap("24");
                p.Panel06.set_flexwrap("wrap");
                p.Panel06.set_fittocontents("height");
                p.Panel06.set_flexgrow("1");
                p.Panel06.move("40","143","100%","392",null,null);

                p.Panel01.set_taborder("50");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_verticalgap("24");
                p.Panel01.set_tablecellarea("0/0");
                p.Panel01.set_cssclass("pnl_WF_Detailbox");
                p.Panel01.set_spacing("39px");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("0","Static02:40",null,"534","0",null);

                p.Static06_00.set_taborder("51");
                p.Static06_00.set_text("서브타이틀 상세");
                p.Static06_00.set_positionstep("0");
                p.Static06_00.set_cssclass("sta_WF_H4_pc");
                p.Static06_00.set_tablecellarea("0/0");
                p.Static06_00.set_flexgrow("1");
                p.Static06_00.set_fittocontents("height");
                p.Static06_00.set_accessibilityrole("heading4");
                p.Static06_00.set_maxwidth("");
                p.Static06_00.move("0","590","808","38",null,null);

                p.Static08_01.set_taborder("52");
                p.Static08_01.set_text("휴대폰번호");
                p.Static08_01.set_cssclass("sta_WF_Label");
                p.Static08_01.move("87","786","100%","24",null,null);

                p.MaskEdit00_00.set_taborder("53");
                p.MaskEdit00_00.set_format("@@@-@@@@-@@@@");
                p.MaskEdit00_00.set_type("string");
                p.MaskEdit00_00.set_displayinvalidtext("invalid value");
                p.MaskEdit00_00.set_displaynulltext("010-1234-5678");
                p.MaskEdit00_00.move("622","898","100%","48",null,null);

                p.Panel07_01.set_taborder("54");
                p.Panel07_01.set_type("horizontal");
                p.Panel07_01.set_verticalgap("8");
                p.Panel07_01.set_flexwrap("wrap");
                p.Panel07_01.set_flexgrow("1");
                p.Panel07_01.set_maxwidth("");
                p.Panel07_01.move("492","216","253","80",null,null);

                p.Static08_02.set_taborder("55");
                p.Static08_02.set_cssclass("sta_WF_Label");
                p.Static08_02.set_text("이메일");
                p.Static08_02.move("117","816","100%","24",null,null);

                p.Edit04_00.set_taborder("56");
                p.Edit04_00.set_displaynulltext("tobesoft@tobesoft.com");
                p.Edit04_00.move("498","881","100%","48",null,null);

                p.Panel07_02.set_taborder("57");
                p.Panel07_02.set_type("horizontal");
                p.Panel07_02.set_verticalgap("8");
                p.Panel07_02.set_flexwrap("wrap");
                p.Panel07_02.set_flexgrow("1");
                p.Panel07_02.set_maxwidth("");
                p.Panel07_02.move("734","216","253","80",null,null);

                p.Static08_03.set_taborder("58");
                p.Static08_03.set_cssclass("sta_WF_Label");
                p.Static08_03.set_text("생년월일");
                p.Static08_03.move("127","826","100%","24",null,null);

                p.Edit04_02.set_taborder("59");
                p.Edit04_02.set_displaynulltext("1990.01.01");
                p.Edit04_02.move("508","891","100%","48",null,null);

                p.Panel07_03.set_taborder("60");
                p.Panel07_03.set_type("horizontal");
                p.Panel07_03.set_verticalgap("8");
                p.Panel07_03.set_flexwrap("wrap");
                p.Panel07_03.set_flexgrow("1");
                p.Panel07_03.set_maxwidth("");
                p.Panel07_03.move("20","329","253","80",null,null);

                p.Static08_04.set_taborder("61");
                p.Static08_04.set_cssclass("sta_WF_Label");
                p.Static08_04.set_text("우편번호");
                p.Static08_04.set_flexgrow("1");
                p.Static08_04.move("137","836","100%","24",null,null);

                p.Edit04_03.set_taborder("62");
                p.Edit04_03.set_flexgrow("1");
                p.Edit04_03.move("518","901","294","48",null,null);

                p.Button03.set_taborder("63");
                p.Button03.set_text("검색");
                p.Button03.set_minwidth("78");
                p.Button03.set_maxwidth("");
                p.Button03.move("477","1236","78","48",null,null);

                p.Panel08.set_taborder("64");
                p.Panel08.set_horizontalgap("8");
                p.Panel08.move("0","19","100%","48",null,null);

                p.Panel07_04.set_taborder("65");
                p.Panel07_04.set_type("horizontal");
                p.Panel07_04.set_verticalgap("8");
                p.Panel07_04.set_flexwrap("wrap");
                p.Panel07_04.set_flexgrow("1");
                p.Panel07_04.set_minwidth("253");
                p.Panel07_04.set_maxwidth("");
                p.Panel07_04.move("372","319","253","80",null,null);

                p.Static08_05.set_taborder("66");
                p.Static08_05.set_cssclass("sta_WF_Label");
                p.Static08_05.set_text("주소");
                p.Static08_05.move("137","836","100%","24",null,null);

                p.Edit04_04.set_taborder("67");
                p.Edit04_04.move("518","901","100%","48",null,null);

                p.Panel07_05.set_taborder("68");
                p.Panel07_05.set_type("horizontal");
                p.Panel07_05.set_verticalgap("8");
                p.Panel07_05.set_flexwrap("wrap");
                p.Panel07_05.set_flexgrow("1");
                p.Panel07_05.set_minwidth("");
                p.Panel07_05.move("10","113","253","80",null,null);

                p.Panel12.set_taborder("69");
                p.Panel12.set_horizontalgap("24");
                p.Panel12.set_flexgrow("1");
                p.Panel12.set_verticalgap("24");
                p.Panel12.move("0","208","808","80",null,null);

                p.Static08_06.set_taborder("70");
                p.Static08_06.set_cssclass("sta_WF_Label");
                p.Static08_06.set_text("성별");
                p.Static08_06.move("127","826","100%","24",null,null);

                p.Radio00.set_taborder("71");
                p.Radio00.set_innerdataset(Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("vertical");
                p.Radio00.move("157","1336","172","48",null,null);

                p.Panel07_06.set_taborder("72");
                p.Panel07_06.set_type("horizontal");
                p.Panel07_06.set_verticalgap("8");
                p.Panel07_06.set_flexwrap("wrap");
                p.Panel07_06.set_flexgrow("1");
                p.Panel07_06.set_maxwidth("");
                p.Panel07_06.move("974","10","253","80",null,null);

                p.Static08_07_00.set_taborder("73");
                p.Static08_07_00.set_cssclass("sta_WF_Label");
                p.Static08_07_00.set_text("결혼유무");
                p.Static08_07_00.move("127","826","100%","24",null,null);

                p.Radio00_00_00.set_taborder("74");
                p.Radio00_00_00.set_innerdataset(Radio00_00_00_innerdataset);
                p.Radio00_00_00.set_codecolumn("codecolumn");
                p.Radio00_00_00.set_datacolumn("datacolumn");
                p.Radio00_00_00.set_direction("vertical");
                p.Radio00_00_00.set_flexgrow("1");
                p.Radio00_00_00.move("157","1336","172","48",null,null);

                p.Spin00.set_taborder("75");
                p.Spin00.set_enable("false");
                p.Spin00.set_flexgrow("1");
                p.Spin00.move("671","1341","100","48",null,null);

                p.Static03.set_taborder("76");
                p.Static03.set_text("명");
                p.Static03.set_enable("false");
                p.Static03.move("699","1344","20","48",null,null);

                p.Panel10.set_taborder("77");
                p.Panel10.set_horizontalgap("8");
                p.Panel10.set_flexgrow("1");
                p.Panel10.move("504","1311","100%","48",null,null);

                p.Panel07_07_00.set_taborder("78");
                p.Panel07_07_00.set_type("horizontal");
                p.Panel07_07_00.set_verticalgap("8");
                p.Panel07_07_00.set_flexwrap("wrap");
                p.Panel07_07_00.set_flexgrow("1");
                p.Panel07_07_00.set_maxwidth("");
                p.Panel07_07_00.move("492","216","253","80",null,null);

                p.Static08_07.set_taborder("79");
                p.Static08_07.set_cssclass("sta_WF_Label");
                p.Static08_07.set_text("외국어");
                p.Static08_07.move("127","826","100%","24",null,null);

                p.CheckBox00.set_taborder("80");
                p.CheckBox00.set_text("영어");
                p.CheckBox00.move("1041","1318","77","48",null,null);

                p.CheckBox00_00.set_taborder("81");
                p.CheckBox00_00.set_text("일본어");
                p.CheckBox00_00.move("10","41","94","48",null,null);

                p.CheckBox00_00_00.set_taborder("82");
                p.CheckBox00_00_00.set_text("중국어");
                p.CheckBox00_00_00.move("87","10","94","48",null,null);

                p.Panel09.set_taborder("83");
                p.Panel09.move("986","1311","265","48",null,null);

                p.Panel07_07.set_taborder("84");
                p.Panel07_07.set_type("horizontal");
                p.Panel07_07.set_verticalgap("8");
                p.Panel07_07.set_flexwrap("wrap");
                p.Panel07_07.set_flexgrow("1");
                p.Panel07_07.set_maxwidth("");
                p.Panel07_07.move("986","1280","253","80",null,null);

                p.Static08_05_00.set_taborder("85");
                p.Static08_05_00.set_cssclass("sta_WF_Label");
                p.Static08_05_00.set_text("비고");
                p.Static08_05_00.move("137","836","100%","24",null,null);

                p.TextArea00.set_taborder("86");
                p.TextArea00.move("22","1414","100.00%","144",null,null);

                p.Panel07_05_00.set_taborder("87");
                p.Panel07_05_00.set_type("horizontal");
                p.Panel07_05_00.set_verticalgap("8");
                p.Panel07_05_00.set_flexgrow("1");
                p.Panel07_05_00.set_flexwrap("wrap");
                p.Panel07_05_00.set_maxwidth("");
                p.Panel07_05_00.move("22","1383","1431","176",null,null);

                p.Panel07_00.set_taborder("88");
                p.Panel07_00.set_horizontalgap("24");
                p.Panel07_00.set_verticalgap("24");
                p.Panel07_00.set_flexwrap("wrap");
                p.Panel07_00.set_fittocontents("height");
                p.Panel07_00.set_flexgrow("1");
                p.Panel07_00.move("22","1074","100%","528",null,null);

                p.Panel02.set_taborder("89");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_verticalgap("24");
                p.Panel02.set_cssclass("pnl_WF_Detailbox");
                p.Panel02.set_spacing("39px");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("0","Panel01:40",null,"630","0",null);

                p.Button02_00.set_taborder("90");
                p.Button02_00.set_text("생성");
                p.Button02_00.set_cssclass("btn_WF_CrudNew");
                p.Button02_00.set_flexshrink("0");
                p.Button02_00.set_maxwidth("");
                p.Button02_00.move("64","1436","90","48",null,null);

                p.Button02_01_00.set_taborder("91");
                p.Button02_01_00.set_text("수정");
                p.Button02_01_00.set_cssclass("btn_WF_CrudModify");
                p.Button02_01_00.set_flexshrink("0");
                p.Button02_01_00.set_maxwidth("");
                p.Button02_01_00.move("407","1450","90","48",null,null);

                p.Button02.set_taborder("92");
                p.Button02.set_text("저장");
                p.Button02.set_cssclass("btn_WF_CrudSave");
                p.Button02.set_flexshrink("0");
                p.Button02.set_maxwidth("");
                p.Button02.move("508","1443","90","48",null,null);

                p.Button02_01.set_taborder("93");
                p.Button02_01.set_text("삭제");
                p.Button02_01.set_cssclass("btn_WF_CrudDelete");
                p.Button02_01.set_flexshrink("0");
                p.Button02_01.set_maxwidth("");
                p.Button02_01.move("614","1452","90","48",null,null);

                p.Panel03.set_taborder("94");
                p.Panel03.set_horizontalgap("8");
                p.Panel03.set_flexmainaxisalign("center");
                p.Panel03.set_verticalgap("8");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_fittocontents("height");
                p.Panel03.move("0","Panel02:40",null,"48","0%",null);
            	}
            );
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",448,3004,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02.move("0","400",null,"48","0",null);



                p.Panel00.set_spacing("24px 16px");
                p.Panel00.move("0","Static00:24",null,"296","0",null);

                p.Panel010.move("24","24","100%","176",null,null);

                p.Panel01.set_spacing("23px 15px");
                p.Panel01.move("0","Static02:20",null,"1334","0",null);

                p.Panel04.move("678","574","100%","808",null,null);

                p.Panel02_00.move("24","521","100%","392",null,null);

                p.Panel06.move("40","143","100%","1224",null,null);

                p.Panel02_01.move("690","1031","272","80",null,null);

                p.Panel02_02.move("10","10","272","80",null,null);

                p.Panel02_03.move("492","10","272","80",null,null);

                p.Panel02_04.move("10","113","272","80",null,null);

                p.Panel02_05.move("492","113","272","80",null,null);

                p.Panel02_06.move("10","216","272","80",null,null);

                p.Panel02_08.move("10","319","272","80",null,null);

                p.Panel02_10.move("372","216","272","80",null,null);

                p.Panel02.set_spacing("23px 15px");
                p.Panel02.move("0","1818",null,"1118","0",null);

                p.Panel12.set_flexwrap("wrap");
                p.Panel12.move("0","208","808","184",null,null);

                p.Panel07_00.move("22","1074","100%","1008",null,null);

                p.Panel03.move("0","2956",null,"48","0%",null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Template02.xfdl", function() {
        this.Template02_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        this.Edit04_03_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Template02_onload,this);
            this.Edit04_03.addEventHandler("onchanged",this.Edit04_03_onchanged,this);
        };
        this.loadIncludeScript("Template02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
