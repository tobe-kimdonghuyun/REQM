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
            this.set_titletext("작업내용(전산실작업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cbo", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"hh\" type=\"STRING\" size=\"256\"/><Column id=\"mm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"hh\">선택</Col><Col id=\"code\">0</Col><Col id=\"mm\">선택</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"hh\">01</Col><Col id=\"mm\">5</Col></Row><Row><Col id=\"hh\">02</Col><Col id=\"code\">2</Col><Col id=\"mm\">10</Col></Row><Row><Col id=\"hh\">03</Col><Col id=\"code\">3</Col><Col id=\"mm\">15</Col></Row><Row><Col id=\"hh\">04</Col><Col id=\"code\">4</Col><Col id=\"mm\">20</Col></Row><Row><Col id=\"hh\">05</Col><Col id=\"code\">5</Col><Col id=\"mm\">25</Col></Row><Row><Col id=\"hh\">06</Col><Col id=\"code\">6</Col><Col id=\"mm\">30</Col></Row><Row><Col id=\"hh\">07</Col><Col id=\"code\">7</Col><Col id=\"mm\">35</Col></Row><Row><Col id=\"hh\">08</Col><Col id=\"code\">8</Col><Col id=\"mm\">40</Col></Row><Row><Col id=\"hh\">09</Col><Col id=\"code\">9</Col><Col id=\"mm\">45</Col></Row><Row><Col id=\"hh\">10</Col><Col id=\"code\">10</Col><Col id=\"mm\">50</Col></Row><Row><Col id=\"hh\">11</Col><Col id=\"code\">11</Col><Col id=\"mm\">60</Col></Row><Row><Col id=\"hh\">12</Col><Col id=\"code\">12</Col></Row><Row><Col id=\"hh\">13</Col><Col id=\"code\">13</Col></Row><Row><Col id=\"hh\">14</Col><Col id=\"code\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"hh\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("Panel00","0","0","100.00%","3634",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem01\" componentid=\"div00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"div01\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel03_00\"/><PanelItem id=\"PanelItem04\" componentid=\"div02\"/><PanelItem id=\"PanelItem07\" componentid=\"Panel01_01\"/><PanelItem id=\"PanelItem06\" componentid=\"div03\"/><PanelItem id=\"PanelItem09\" componentid=\"Panel06_01\"/><PanelItem id=\"PanelItem08\" componentid=\"div04\"/><PanelItem id=\"PanelItem11\" componentid=\"Panel07_01\"/><PanelItem id=\"PanelItem10\" componentid=\"div05\"/><PanelItem id=\"PanelItem13\" componentid=\"Panel08_01\"/><PanelItem id=\"PanelItem12\" componentid=\"div06\"/><PanelItem id=\"PanelItem15\" componentid=\"Panel09_01\"/><PanelItem id=\"PanelItem14\" componentid=\"div07\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","242","70","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("타부서 작업통지 확인");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","930","70","194","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button01\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","242","70","100%","70",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","595.00","20","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","540.00","10","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","65","830","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("첨부(구비서류)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","752","830","194","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","65","830","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("8");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","1197.00","785","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01","1185.00","790","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","156","1750","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("신청자전달사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","845","1750","194","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"Button00_04\"/><PanelItem id=\"PanelItem00\" componentid=\"Button01_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","156","1750","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("13");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_02","1191.00","1700","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_04","1201.00","1720","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06_01","0","0","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("16");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle06_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle06_01_01","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("작업감독자검토의견");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06_01_01","1111","0","194","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button06_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button06_01_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button06_01_01","80","7","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Button("Button06_01_02","124","9","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_01","0","0","100%","70",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle07_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_07_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle07_01_01","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("운영자회사담당자검토의견");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_07_01_01","1111","0","194","50",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button07_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button07_01_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button07_01_01","80","7","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Button("Button07_01_02","124","9","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08_01","0","0","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("26");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle08_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel008_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle08_01_01","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("전산실감독자검토의견");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel008_01_01","1111","0","194","50",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button08_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button08_01_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button08_01_01","80","7","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Button("Button08_01_02","124","9","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09_01","0","0","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("31");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle09_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel09_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle09_01","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09_01_01","1111","0","194","50",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button09_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button09_01_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button09_01_01","80","7","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Button("Button09_01_02","124","9","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","113","216","100.00%","216",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("타부서 작업통지 확인여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoOtherDeptJobAvtsmtIdntyYn","0","46","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div00_form_rdoOtherDeptJobAvtsmtIdntyYn_innerdataset = new nexacro.NormalDataset("div00_form_rdoOtherDeptJobAvtsmtIdntyYn_innerdataset", obj);
            div00_form_rdoOtherDeptJobAvtsmtIdntyYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoOtherDeptJobAvtsmtIdntyYn_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20.00","0","100%","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem02\" componentid=\"rdoOtherDeptJobAvtsmtIdntyYn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","20.00","10","100%","100",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_value("인천국제공항공사 전산실 내 작업을 진행하실 경우 대상 시스템 포함 타 시스템에 미칠 영향을 고려하시고 작업에 임해주시길 바랍니다.\n대상 시스템 작업시, 타 시스템에 영향을 미칠 경우 해당 시스템을 관리 및 이용하고 있는부서에 사전 작업을 통지하셔야 합니다.\n타시스템 담당 부서 및 이용자가 작업 통보를 인지하지 못한 것이 적발될 경우 작업 중단 . 시스템 원상복구 및 퇴거 조치 되시며, 추후\n전산실 작업 허가에 불이익을 받으실수 있습니다.");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","1326","155","100.00%","120",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_spacing("10px 20px 10px 20px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan00","1326","265","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","90","425","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("작업내용");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","1170.00","365","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","1187.00","365","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","775","425","194","50",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","10","10","100.00%","70",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div01","176","533","100.00%","265",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("div01");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","20","0","100%","254",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panGrdBtn\"/><PanelItem id=\"PanelItem01\" componentid=\"grdCmproDtl\"/></Contents>");
            this.div01.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","100.00%","265",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/></Contents>");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnGrdAdd","774.00","10","47","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Small");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnGrdDel","804.00","10","45","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_SmallRed");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnGrdRegi","774.00","10","45","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_SmallBlack");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnGrdDw","774.00","10","124","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_text("다운로드(엑셀)");
            obj.set_cssclass("btn_WF_GrdDw");
            obj.set_visible("false");
            obj.set_fittocontents("width");
            this.div01.addChild(obj.name, obj);

            obj = new Panel("panGrdBtn","690","20","100%","44",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("10px 0px 0px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnGrdAdd\"/><PanelItem id=\"PanelItem04\" componentid=\"btnGrdDel\"/><PanelItem id=\"PanelItem05\" componentid=\"btnGrdRegi\"/><PanelItem id=\"PanelItem06\" componentid=\"btnGrdDw\"/></Contents>");
            this.div01.addChild(obj.name, obj);

            obj = new Grid("grdCmproDtl","0","20","100.00%","200",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_binddataset("dsCmproDtl");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"작업일자\" cssclass=\"CellE\"/><Cell col=\"3\" text=\"작업시작시간\" cssclass=\"CellE\"/><Cell col=\"4\" text=\"작업종료시간\" cssclass=\"CellE\"/><Cell col=\"5\" text=\"개요\" cssclass=\"CellE\"/><Cell col=\"6\" text=\"작업내역\" cssclass=\"CellE\"/><Cell col=\"7\" text=\"작업자회사\" cssclass=\"CellE\"/><Cell col=\"8\" text=\"작업자성함\" cssclass=\"CellE,CellEnd\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" textAlign=\"center\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:jobYmd\" displaytype=\"calendarcontrol\" edittype=\"date\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:jobBgngHr\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"##:##\" maskeditlimitbymask=\"integer\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:jobEndHr\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditlimitbymask=\"integer\" maskeditformat=\"##:##\" maskedittype=\"string\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:otlnCn\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:jobCn\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:oprtrCoNm\" displaytype=\"editcontrol\" cssclass=\"expr:state==&apos;0&apos;?&apos;CellTxtRed&apos;:&apos;CellTxtBlue&apos;\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:oprtrNm\" displaytype=\"editcontrol\" cssclass=\"CellEnd\" edittype=\"text\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div01.addChild(obj.name, obj);

            obj = new Div("div02","290","855","100.00%","880",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("div02");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00_02","0","0","300","46",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("0");
            obj.set_text("작업신고서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.div02.addChild(obj.name, obj);

            obj = new Panel("panTitle","20","10","100%","46",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02\"/></Contents>");
            this.div02.addChild(obj.name, obj);

            obj = new Grid("grdJobWtnt","20.00","110","100%","40",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"120\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:A110\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellFileUp\" text=\"파일선택\"/><Cell col=\"2\" cssclass=\"CellFileDel\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static03","20.00","154","100%","40",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("3");
            obj.set_text("시설물 공사를 포함한 작업일 경우 입주자서비스포털(TSP)내 최종 협의완료된 “  “작업신고서＂를 첨부하시길 바랍니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.div02.addChild(obj.name, obj);

            obj = new Panel("panFile","965","938","100%","161",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("4");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"grdJobWtnt\"/><PanelItem id=\"PanelItem03\" componentid=\"Static03\"/></Contents>");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_00","10","10","300","46",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("5");
            obj.set_text("전산장비반출입 신청서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.div02.addChild(obj.name, obj);

            obj = new Panel("panTitle00","30","20","100%","46",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("6");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_00\"/></Contents>");
            this.div02.addChild(obj.name, obj);

            obj = new Grid("grdEdpEqpmntincmgAplcfm","30.00","120","100%","40",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"120\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:B110\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellFileUp\" text=\"파일선택\"/><Cell col=\"2\" cssclass=\"CellFileDel\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static04","30.00","164","100%","40",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("8");
            obj.set_text("전산실 내부로 장비(서버, 네트워크 장비 등) 가 반입.반출될 경우");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.div02.addChild(obj.name, obj);

            obj = new Panel("panFile00","108","1600","100%","154",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("9");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdEdpEqpmntincmgAplcfm\"/><PanelItem id=\"PanelItem03\" componentid=\"Static04\"/></Contents>");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_01","20","20","300","46",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("10");
            obj.set_text("제원조사서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.div02.addChild(obj.name, obj);

            obj = new Panel("panTitle01","40","30","100%","46",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("11");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_01\"/></Contents>");
            this.div02.addChild(obj.name, obj);

            obj = new Grid("grdSpfaWritg","40.00","130","100%","40",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("12");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"120\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:C110\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellFileUp\" text=\"파일선택\"/><Cell col=\"2\" cssclass=\"CellFileDel\" text=\"삭제\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static05","40.00","174","100%","40",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("13");
            obj.set_text("신규 시스템이 반입(장비의 설치 및 변경) 되는 경우");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_Des");
            this.div02.addChild(obj.name, obj);

            obj = new Panel("panFile01","14","1656","100%","155",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("14");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle01\"/><PanelItem id=\"PanelItem02\" componentid=\"grdSpfaWritg\"/><PanelItem id=\"PanelItem03\" componentid=\"Static05\"/></Contents>");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_02","30","30","300","46",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("15");
            obj.set_text("시스템설치 계획서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.div02.addChild(obj.name, obj);

            obj = new Panel("panTitle02","50","40","100%","46",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("16");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_02\"/></Contents>");
            this.div02.addChild(obj.name, obj);

            obj = new Grid("grdSysInstlWtpl","50.00","140","100%","40",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("17");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"120\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:D110\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"파일선택\" cssclass=\"CellFileUp\"/><Cell col=\"2\" cssclass=\"CellFileDel\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static06","50.00","184","100%","40",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("18");
            obj.set_text("신규 시스템을 전산실에 설치하는 경우(최초 1회 필수)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div02.addChild(obj.name, obj);

            obj = new Panel("panFile02","40","1670","100.00%","205",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("19");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle02\"/><PanelItem id=\"PanelItem02\" componentid=\"grdSysInstlWtpl\"/><PanelItem id=\"PanelItem03\" componentid=\"Static06\"/></Contents>");
            this.div02.addChild(obj.name, obj);

            obj = new Static("staLabel00_02_03","40","40","300","46",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("20");
            obj.set_text("세부작업내역서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_flexgrow("1");
            this.div02.addChild(obj.name, obj);

            obj = new Panel("panTitle03","60","50","100%","46",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("21");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_02_03\"/></Contents>");
            this.div02.addChild(obj.name, obj);

            obj = new Grid("grdDtlJobStmt","60.00","150","100%","40",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("22");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"120\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:E110\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"파일선택\" cssclass=\"CellFileUp\"/><Cell col=\"2\" cssclass=\"CellFileDel\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.div02.addChild(obj.name, obj);

            obj = new Static("Static07","60.00","194","100%","40",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("23");
            obj.set_text("작업으로 인해 해당 시스템 및 타 시스템에 영향이 있을 경우");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div02.addChild(obj.name, obj);

            obj = new Panel("panFile03","0","675","100.00%","205",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("24");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panTitle03\"/><PanelItem id=\"PanelItem02\" componentid=\"grdDtlJobStmt\"/><PanelItem id=\"PanelItem03\" componentid=\"Static07\"/></Contents>");
            this.div02.addChild(obj.name, obj);

            obj = new Div("div03","264","1726","100.00%","165",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("div03");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","650","194","100%","46",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("0");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.div03.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","650","248","100%","100",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("내용 입력");
            this.div03.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","650","194","100%","154",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea01\"/></Contents>");
            this.div03.addChild(obj.name, obj);

            obj = new Panel("pan02","0","0","100.00%","165",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/></Contents>");
            this.div03.addChild(obj.name, obj);

            obj = new Div("div04","354","2110","100.00%","387",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("div04");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel06_02_01","0","0","100%","46",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("0");
            obj.set_text("검토결과");
            obj.set_cssclass("sta_WF_Label");
            this.div04.addChild(obj.name, obj);

            obj = new TextArea("TextArea06_02_01","0","54","100%","100",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("내용 입력");
            this.div04.addChild(obj.name, obj);

            obj = new Grid("Grid06_02_01","0","162","100%","166",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"801\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"별첨\"/><Cell col=\"1\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:체크\"/><Cell col=\"1\" text=\"bind:신청자\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.div04.addChild(obj.name, obj);

            obj = new Static("Static06_02_01","0","336","100%","40",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("3");
            obj.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div04.addChild(obj.name, obj);

            obj = new Panel("Panel06_02_01","20","0","100%","376",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel06_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea06_02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid06_02_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static06_02_01\"/></Contents>");
            this.div04.addChild(obj.name, obj);

            obj = new Panel("pan06_02","0","37","100.00%","387",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel06_02_01\"/></Contents>");
            this.div04.addChild(obj.name, obj);

            obj = new Div("div05","364","2528","100.00%","387",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("div05");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel07_02_01","0","0","100%","46",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("0");
            obj.set_text("검토결과");
            obj.set_cssclass("sta_WF_Label");
            this.div05.addChild(obj.name, obj);

            obj = new TextArea("TextArea07_02_01","0","54","100%","100",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("내용 입력");
            this.div05.addChild(obj.name, obj);

            obj = new Grid("Grid07_02_01","0","162","100%","166",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"801\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"별첨\"/><Cell col=\"1\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:체크\"/><Cell col=\"1\" text=\"bind:신청자\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.div05.addChild(obj.name, obj);

            obj = new Static("Static07_02_01","0","336","100%","40",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("3");
            obj.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div05.addChild(obj.name, obj);

            obj = new Panel("Panel07_02_01","20","0","100%","376",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel07_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea07_02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid07_02_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static07_02_01\"/></Contents>");
            this.div05.addChild(obj.name, obj);

            obj = new Panel("pan07_02","0","37","100.00%","387",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07_02_01\"/></Contents>");
            this.div05.addChild(obj.name, obj);

            obj = new Div("div06","228","2922","100.00%","387",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("div06");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel08_02_01","0","0","100%","46",null,null,null,null,null,null,this.div06.form);
            obj.set_taborder("0");
            obj.set_text("검토결과");
            obj.set_cssclass("sta_WF_Label");
            this.div06.addChild(obj.name, obj);

            obj = new TextArea("TextArea08_02_01","0","54","100%","100",null,null,null,null,null,null,this.div06.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("내용 입력");
            this.div06.addChild(obj.name, obj);

            obj = new Grid("Grid08_02_01","0","162","100%","166",null,null,null,null,null,null,this.div06.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"801\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"별첨\"/><Cell col=\"1\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:체크\"/><Cell col=\"1\" text=\"bind:신청자\" cssclass=\"CellEnd\"/></Band></Format></Formats>");
            this.div06.addChild(obj.name, obj);

            obj = new Static("Static08_02_02","0","336","100%","40",null,null,null,null,null,null,this.div06.form);
            obj.set_taborder("3");
            obj.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div06.addChild(obj.name, obj);

            obj = new Panel("Panel08_02_01","20","0","100%","376",null,null,null,null,null,null,this.div06.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel08_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea08_02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid08_02_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static08_02_02\"/></Contents>");
            this.div06.addChild(obj.name, obj);

            obj = new Panel("pan08_02","0","37","100.00%","387",null,null,null,null,null,null,this.div06.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel08_02_01\"/></Contents>");
            this.div06.addChild(obj.name, obj);

            obj = new Div("div07","330","3282","100.00%","387",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("div07");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel09_02_01","0","0","100%","46",null,null,null,null,null,null,this.div07.form);
            obj.set_taborder("0");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_Label");
            this.div07.addChild(obj.name, obj);

            obj = new TextArea("txtCnvyMttrCn","0","54","100%","100",null,null,null,null,null,null,this.div07.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("내용 입력");
            this.div07.addChild(obj.name, obj);

            obj = new Grid("Grid09_02_01","0","162","100%","166",null,null,null,null,null,null,this.div07.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsCnvyMttrCn");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"801\"/></Columns><Rows><Row size=\"44\" band=\"head\"/><Row size=\"44\"/></Rows><Band id=\"head\"><Cell text=\"별첨\"/><Cell col=\"1\" text=\"내용\" cssclass=\"CellEnd\"/></Band><Band id=\"body\"><Cell text=\"bind:체크\"/><Cell col=\"1\" text=\"bind:cnvyMttrCn\" cssclass=\"CellEnd\" tooltiptext=\"bind:cnvyMttrCn\"/></Band></Format></Formats>");
            this.div07.addChild(obj.name, obj);

            obj = new Static("Static09_02_01","0","336","100%","40",null,null,null,null,null,null,this.div07.form);
            obj.set_taborder("3");
            obj.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div07.addChild(obj.name, obj);

            obj = new Panel("Panel09_02_01","20","0","100%","376",null,null,null,null,null,null,this.div07.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel09_02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"txtCnvyMttrCn\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid09_02_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static09_02_01\"/></Contents>");
            this.div07.addChild(obj.name, obj);

            obj = new Panel("pan09_02","0","37","100.00%","387",null,null,null,null,null,null,this.div07.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel09_02_01\"/></Contents>");
            this.div07.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00.set_taborder("0");
                p.staLabel00.set_text("타부서 작업통지 확인여부");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("0","0","100%","46",null,null);

                p.rdoOtherDeptJobAvtsmtIdntyYn.set_taborder("1");
                p.rdoOtherDeptJobAvtsmtIdntyYn.set_fittocontents("width");
                p.rdoOtherDeptJobAvtsmtIdntyYn.set_innerdataset(div00_form_rdoOtherDeptJobAvtsmtIdntyYn_innerdataset);
                p.rdoOtherDeptJobAvtsmtIdntyYn.set_codecolumn("codecolumn");
                p.rdoOtherDeptJobAvtsmtIdntyYn.set_datacolumn("datacolumn");
                p.rdoOtherDeptJobAvtsmtIdntyYn.set_direction("vertical");
                p.rdoOtherDeptJobAvtsmtIdntyYn.set_value("0");
                p.rdoOtherDeptJobAvtsmtIdntyYn.set_index("0");
                p.rdoOtherDeptJobAvtsmtIdntyYn.move("0","46","100%","40",null,null);

                p.Panel00_00_00.set_taborder("2");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("20.00","0","100%","86",null,null);

                p.TextArea00.set_taborder("4");
                p.TextArea00.set_value("인천국제공항공사 전산실 내 작업을 진행하실 경우 대상 시스템 포함 타 시스템에 미칠 영향을 고려하시고 작업에 임해주시길 바랍니다.\n대상 시스템 작업시, 타 시스템에 영향을 미칠 경우 해당 시스템을 관리 및 이용하고 있는부서에 사전 작업을 통지하셔야 합니다.\n타시스템 담당 부서 및 이용자가 작업 통보를 인지하지 못한 것이 적발될 경우 작업 중단 . 시스템 원상복구 및 퇴거 조치 되시며, 추후\n전산실 작업 허가에 불이익을 받으실수 있습니다.");
                p.TextArea00.set_readonly("true");
                p.TextArea00.move("20.00","10","100%","100",null,null);

                p.Panel02.set_taborder("5");
                p.Panel02.set_spacing("10px 20px 10px 20px");
                p.Panel02.move("1326","155","100.00%","120",null,null);

                p.pan00.set_taborder("3");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("1326","265","100.00%","96",null,null);
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

            	}
            );
            obj.set_type("vertical");
            this.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_taborder("7");
                p.Panel01.set_type("vertical");
                p.Panel01.set_verticalgap("10");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("20","0","100%","254",null,null);

                p.Panel00.set_taborder("0");
                p.Panel00.set_cssclass("pal_WF_DtlBg");
                p.Panel00.set_spacing("0px 20px 10px 20px");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("10");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("0","0","100.00%","265",null,null);

                p.btnGrdAdd.set_taborder("1");
                p.btnGrdAdd.set_text("추가");
                p.btnGrdAdd.set_cssclass("btn_WF_Small");
                p.btnGrdAdd.set_visible("true");
                p.btnGrdAdd.set_fittocontents("width");
                p.btnGrdAdd.move("774.00","10","47","34",null,null);

                p.btnGrdDel.set_taborder("2");
                p.btnGrdDel.set_text("삭제");
                p.btnGrdDel.set_cssclass("btn_WF_SmallRed");
                p.btnGrdDel.set_visible("true");
                p.btnGrdDel.set_fittocontents("width");
                p.btnGrdDel.move("804.00","10","45","34",null,null);

                p.btnGrdRegi.set_taborder("3");
                p.btnGrdRegi.set_text("등록");
                p.btnGrdRegi.set_cssclass("btn_WF_SmallBlack");
                p.btnGrdRegi.set_visible("false");
                p.btnGrdRegi.set_fittocontents("width");
                p.btnGrdRegi.move("774.00","10","45","34",null,null);

                p.btnGrdDw.set_taborder("4");
                p.btnGrdDw.set_text("다운로드(엑셀)");
                p.btnGrdDw.set_cssclass("btn_WF_GrdDw");
                p.btnGrdDw.set_visible("false");
                p.btnGrdDw.set_fittocontents("width");
                p.btnGrdDw.move("774.00","10","124","34",null,null);

                p.panGrdBtn.set_taborder("5");
                p.panGrdBtn.set_flexcrossaxisalign("start");
                p.panGrdBtn.set_flexcrossaxiswrapalign("start");
                p.panGrdBtn.set_flexmainaxisalign("end");
                p.panGrdBtn.set_horizontalgap("10");
                p.panGrdBtn.set_spacing("10px 0px 0px");
                p.panGrdBtn.set_fittocontents("height");
                p.panGrdBtn.move("690","20","100%","44",null,null);

                p.grdCmproDtl.set_taborder("6");
                p.grdCmproDtl.set_binddataset("dsCmproDtl");
                p.grdCmproDtl.move("0","20","100.00%","200",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div01.form
            obj = new Layout("Layout0","",0,0,this.div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div02.form
            obj = new Layout("default","",0,0,this.div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00_02.set_taborder("0");
                p.staLabel00_02.set_text("작업신고서");
                p.staLabel00_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02.set_flexgrow("1");
                p.staLabel00_02.move("0","0","300","46",null,null);

                p.panTitle.set_taborder("1");
                p.panTitle.set_cssclass("pan_WF_FileTitle");
                p.panTitle.move("20","10","100%","46",null,null);

                p.grdJobWtnt.set_taborder("2");
                p.grdJobWtnt.set_binddataset("dsFile");
                p.grdJobWtnt.set_autofittype("col");
                p.grdJobWtnt.set_cssclass("grd_WF_FileAdd");
                p.grdJobWtnt.move("20.00","110","100%","40",null,null);

                p.Static03.set_taborder("3");
                p.Static03.set_text("시설물 공사를 포함한 작업일 경우 입주자서비스포털(TSP)내 최종 협의완료된 “  “작업신고서＂를 첨부하시길 바랍니다.");
                p.Static03.set_fittocontents("height");
                p.Static03.set_cssclass("sta_WF_Des");
                p.Static03.move("20.00","154","100%","40",null,null);

                p.panFile.set_taborder("4");
                p.panFile.set_fittocontents("height");
                p.panFile.set_spacing("10px 20px 10px 20px");
                p.panFile.set_flexwrap("wrap");
                p.panFile.set_cssclass("pal_WF_DtlBg");
                p.panFile.set_verticalgap("4");
                p.panFile.move("965","938","100%","161",null,null);

                p.staLabel00_02_00.set_taborder("5");
                p.staLabel00_02_00.set_text("전산장비반출입 신청서");
                p.staLabel00_02_00.set_cssclass("sta_WF_Label");
                p.staLabel00_02_00.set_flexgrow("1");
                p.staLabel00_02_00.move("10","10","300","46",null,null);

                p.panTitle00.set_taborder("6");
                p.panTitle00.set_cssclass("pan_WF_FileTitle");
                p.panTitle00.move("30","20","100%","46",null,null);

                p.grdEdpEqpmntincmgAplcfm.set_taborder("7");
                p.grdEdpEqpmntincmgAplcfm.set_binddataset("dsFile");
                p.grdEdpEqpmntincmgAplcfm.set_autofittype("col");
                p.grdEdpEqpmntincmgAplcfm.set_cssclass("grd_WF_FileAdd");
                p.grdEdpEqpmntincmgAplcfm.move("30.00","120","100%","40",null,null);

                p.Static04.set_taborder("8");
                p.Static04.set_text("전산실 내부로 장비(서버, 네트워크 장비 등) 가 반입.반출될 경우");
                p.Static04.set_fittocontents("height");
                p.Static04.set_cssclass("sta_WF_Des");
                p.Static04.move("30.00","164","100%","40",null,null);

                p.panFile00.set_taborder("9");
                p.panFile00.set_fittocontents("height");
                p.panFile00.set_spacing("10px 20px 10px 20px");
                p.panFile00.set_flexwrap("wrap");
                p.panFile00.set_cssclass("pal_WF_DtlBg");
                p.panFile00.set_verticalgap("4");
                p.panFile00.move("108","1600","100%","154",null,null);

                p.staLabel00_02_01.set_taborder("10");
                p.staLabel00_02_01.set_text("제원조사서");
                p.staLabel00_02_01.set_cssclass("sta_WF_Label");
                p.staLabel00_02_01.set_flexgrow("1");
                p.staLabel00_02_01.move("20","20","300","46",null,null);

                p.panTitle01.set_taborder("11");
                p.panTitle01.set_cssclass("pan_WF_FileTitle");
                p.panTitle01.move("40","30","100%","46",null,null);

                p.grdSpfaWritg.set_taborder("12");
                p.grdSpfaWritg.set_binddataset("dsFile");
                p.grdSpfaWritg.set_autofittype("col");
                p.grdSpfaWritg.set_cssclass("grd_WF_FileAdd");
                p.grdSpfaWritg.move("40.00","130","100%","40",null,null);

                p.Static05.set_taborder("13");
                p.Static05.set_text("신규 시스템이 반입(장비의 설치 및 변경) 되는 경우");
                p.Static05.set_fittocontents("height");
                p.Static05.set_cssclass("sta_WF_Des");
                p.Static05.move("40.00","174","100%","40",null,null);

                p.panFile01.set_taborder("14");
                p.panFile01.set_fittocontents("height");
                p.panFile01.set_spacing("10px 20px 10px 20px");
                p.panFile01.set_flexwrap("wrap");
                p.panFile01.set_cssclass("pal_WF_DtlBg");
                p.panFile01.set_verticalgap("4");
                p.panFile01.move("14","1656","100%","155",null,null);

                p.staLabel00_02_02.set_taborder("15");
                p.staLabel00_02_02.set_text("시스템설치 계획서");
                p.staLabel00_02_02.set_cssclass("sta_WF_Label");
                p.staLabel00_02_02.set_flexgrow("1");
                p.staLabel00_02_02.move("30","30","300","46",null,null);

                p.panTitle02.set_taborder("16");
                p.panTitle02.set_cssclass("pan_WF_FileTitle");
                p.panTitle02.move("50","40","100%","46",null,null);

                p.grdSysInstlWtpl.set_taborder("17");
                p.grdSysInstlWtpl.set_binddataset("dsFile");
                p.grdSysInstlWtpl.set_autofittype("col");
                p.grdSysInstlWtpl.set_cssclass("grd_WF_FileAdd");
                p.grdSysInstlWtpl.move("50.00","140","100%","40",null,null);

                p.Static06.set_taborder("18");
                p.Static06.set_text("신규 시스템을 전산실에 설치하는 경우(최초 1회 필수)");
                p.Static06.set_cssclass("sta_WF_Des");
                p.Static06.set_fittocontents("height");
                p.Static06.move("50.00","184","100%","40",null,null);

                p.panFile02.set_taborder("19");
                p.panFile02.set_fittocontents("height");
                p.panFile02.set_spacing("10px 20px 10px 20px");
                p.panFile02.set_flexwrap("wrap");
                p.panFile02.set_cssclass("pal_WF_DtlBg");
                p.panFile02.set_verticalgap("4");
                p.panFile02.move("40","1670","100.00%","205",null,null);

                p.staLabel00_02_03.set_taborder("20");
                p.staLabel00_02_03.set_text("세부작업내역서");
                p.staLabel00_02_03.set_cssclass("sta_WF_Label");
                p.staLabel00_02_03.set_flexgrow("1");
                p.staLabel00_02_03.move("40","40","300","46",null,null);

                p.panTitle03.set_taborder("21");
                p.panTitle03.set_cssclass("pan_WF_FileTitle");
                p.panTitle03.move("60","50","100%","46",null,null);

                p.grdDtlJobStmt.set_taborder("22");
                p.grdDtlJobStmt.set_binddataset("dsFile");
                p.grdDtlJobStmt.set_autofittype("col");
                p.grdDtlJobStmt.set_cssclass("grd_WF_FileAdd");
                p.grdDtlJobStmt.move("60.00","150","100%","40",null,null);

                p.Static07.set_taborder("23");
                p.Static07.set_text("작업으로 인해 해당 시스템 및 타 시스템에 영향이 있을 경우");
                p.Static07.set_cssclass("sta_WF_Des");
                p.Static07.set_fittocontents("height");
                p.Static07.move("60.00","194","100%","40",null,null);

                p.panFile03.set_taborder("24");
                p.panFile03.set_fittocontents("height");
                p.panFile03.set_spacing("10px 20px 10px 20px");
                p.panFile03.set_flexwrap("wrap");
                p.panFile03.set_cssclass("pal_WF_DtlBg");
                p.panFile03.set_verticalgap("4");
                p.panFile03.move("0","675","100.00%","205",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div02.form
            obj = new Layout("Layout0","",0,0,this.div02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div03.form
            obj = new Layout("default","",0,0,this.div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel03_00.set_taborder("0");
                p.staLabel03_00.set_text("전달사항");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("650","194","100%","46",null,null);

                p.TextArea01.set_taborder("1");
                p.TextArea01.set_displaynulltext("내용 입력");
                p.TextArea01.move("650","248","100%","100",null,null);

                p.Panel02_00_00.set_taborder("2");
                p.Panel02_00_00.set_type("vertical");
                p.Panel02_00_00.set_fittocontents("height");
                p.Panel02_00_00.set_verticalgap("8");
                p.Panel02_00_00.move("650","194","100%","154",null,null);

                p.pan02.set_taborder("3");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","0","100.00%","165",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div03.form
            obj = new Layout("Layout0","",0,0,this.div03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div04.form
            obj = new Layout("default","",0,0,this.div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel06_02_01.set_taborder("0");
                p.staLabel06_02_01.set_text("검토결과");
                p.staLabel06_02_01.set_cssclass("sta_WF_Label");
                p.staLabel06_02_01.move("0","0","100%","46",null,null);

                p.TextArea06_02_01.set_taborder("1");
                p.TextArea06_02_01.set_displaynulltext("내용 입력");
                p.TextArea06_02_01.move("0","54","100%","100",null,null);

                p.Grid06_02_01.set_taborder("2");
                p.Grid06_02_01.set_binddataset("ds00");
                p.Grid06_02_01.move("0","162","100%","166",null,null);

                p.Static06_02_01.set_taborder("3");
                p.Static06_02_01.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
                p.Static06_02_01.set_cssclass("sta_WF_Des");
                p.Static06_02_01.set_fittocontents("height");
                p.Static06_02_01.move("0","336","100%","40",null,null);

                p.Panel06_02_01.set_taborder("4");
                p.Panel06_02_01.set_type("vertical");
                p.Panel06_02_01.set_fittocontents("height");
                p.Panel06_02_01.set_verticalgap("8");
                p.Panel06_02_01.move("20","0","100%","376",null,null);

                p.pan06_02.set_taborder("5");
                p.pan06_02.set_horizontalgap("20");
                p.pan06_02.set_flexcrossaxiswrapalign("start");
                p.pan06_02.set_flexwrap("wrap");
                p.pan06_02.set_fittocontents("height");
                p.pan06_02.set_verticalgap("0");
                p.pan06_02.set_spacing("0px 20px 10px 20px");
                p.pan06_02.set_cssclass("pal_WF_DtlBg");
                p.pan06_02.move("0","37","100.00%","387",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div04.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div04.form
            obj = new Layout("Layout0","",0,0,this.div04.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div04.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div05.form
            obj = new Layout("default","",0,0,this.div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel07_02_01.set_taborder("0");
                p.staLabel07_02_01.set_text("검토결과");
                p.staLabel07_02_01.set_cssclass("sta_WF_Label");
                p.staLabel07_02_01.move("0","0","100%","46",null,null);

                p.TextArea07_02_01.set_taborder("1");
                p.TextArea07_02_01.set_displaynulltext("내용 입력");
                p.TextArea07_02_01.move("0","54","100%","100",null,null);

                p.Grid07_02_01.set_taborder("2");
                p.Grid07_02_01.set_binddataset("ds00");
                p.Grid07_02_01.move("0","162","100%","166",null,null);

                p.Static07_02_01.set_taborder("3");
                p.Static07_02_01.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
                p.Static07_02_01.set_cssclass("sta_WF_Des");
                p.Static07_02_01.set_fittocontents("height");
                p.Static07_02_01.move("0","336","100%","40",null,null);

                p.Panel07_02_01.set_taborder("4");
                p.Panel07_02_01.set_type("vertical");
                p.Panel07_02_01.set_fittocontents("height");
                p.Panel07_02_01.set_verticalgap("8");
                p.Panel07_02_01.move("20","0","100%","376",null,null);

                p.pan07_02.set_taborder("5");
                p.pan07_02.set_horizontalgap("20");
                p.pan07_02.set_flexcrossaxiswrapalign("start");
                p.pan07_02.set_flexwrap("wrap");
                p.pan07_02.set_fittocontents("height");
                p.pan07_02.set_verticalgap("0");
                p.pan07_02.set_spacing("0px 20px 10px 20px");
                p.pan07_02.set_cssclass("pal_WF_DtlBg");
                p.pan07_02.move("0","37","100.00%","387",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div05.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div05.form
            obj = new Layout("Layout0","",0,0,this.div05.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div05.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div06.form
            obj = new Layout("default","",0,0,this.div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel08_02_01.set_taborder("0");
                p.staLabel08_02_01.set_text("검토결과");
                p.staLabel08_02_01.set_cssclass("sta_WF_Label");
                p.staLabel08_02_01.move("0","0","100%","46",null,null);

                p.TextArea08_02_01.set_taborder("1");
                p.TextArea08_02_01.set_displaynulltext("내용 입력");
                p.TextArea08_02_01.move("0","54","100%","100",null,null);

                p.Grid08_02_01.set_taborder("2");
                p.Grid08_02_01.set_binddataset("ds00");
                p.Grid08_02_01.move("0","162","100%","166",null,null);

                p.Static08_02_02.set_taborder("3");
                p.Static08_02_02.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
                p.Static08_02_02.set_cssclass("sta_WF_Des");
                p.Static08_02_02.set_fittocontents("height");
                p.Static08_02_02.move("0","336","100%","40",null,null);

                p.Panel08_02_01.set_taborder("4");
                p.Panel08_02_01.set_type("vertical");
                p.Panel08_02_01.set_fittocontents("height");
                p.Panel08_02_01.set_verticalgap("8");
                p.Panel08_02_01.move("20","0","100%","376",null,null);

                p.pan08_02.set_taborder("5");
                p.pan08_02.set_horizontalgap("20");
                p.pan08_02.set_flexcrossaxiswrapalign("start");
                p.pan08_02.set_flexwrap("wrap");
                p.pan08_02.set_fittocontents("height");
                p.pan08_02.set_verticalgap("0");
                p.pan08_02.set_spacing("0px 20px 10px 20px");
                p.pan08_02.set_cssclass("pal_WF_DtlBg");
                p.pan08_02.move("0","37","100.00%","387",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div06.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div06.form
            obj = new Layout("Layout0","",0,0,this.div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div06.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div07.form
            obj = new Layout("default","",0,0,this.div07.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel09_02_01.set_taborder("0");
                p.staLabel09_02_01.set_text("전달사항");
                p.staLabel09_02_01.set_cssclass("sta_WF_Label");
                p.staLabel09_02_01.move("0","0","100%","46",null,null);

                p.txtCnvyMttrCn.set_taborder("1");
                p.txtCnvyMttrCn.set_displaynulltext("내용 입력");
                p.txtCnvyMttrCn.move("0","54","100%","100",null,null);

                p.Grid09_02_01.set_taborder("2");
                p.Grid09_02_01.set_binddataset("dsCnvyMttrCn");
                p.Grid09_02_01.move("0","162","100%","166",null,null);

                p.Static09_02_01.set_taborder("3");
                p.Static09_02_01.set_text("My Page -> 검토의견함 메뉴에서 내용 등록/수정/삭제 가능합니다.");
                p.Static09_02_01.set_cssclass("sta_WF_Des");
                p.Static09_02_01.set_fittocontents("height");
                p.Static09_02_01.move("0","336","100%","40",null,null);

                p.Panel09_02_01.set_taborder("4");
                p.Panel09_02_01.set_type("vertical");
                p.Panel09_02_01.set_fittocontents("height");
                p.Panel09_02_01.set_verticalgap("8");
                p.Panel09_02_01.move("20","0","100%","376",null,null);

                p.pan09_02.set_taborder("5");
                p.pan09_02.set_horizontalgap("20");
                p.pan09_02.set_flexcrossaxiswrapalign("start");
                p.pan09_02.set_flexwrap("wrap");
                p.pan09_02.set_fittocontents("height");
                p.pan09_02.set_verticalgap("0");
                p.pan09_02.set_spacing("0px 20px 10px 20px");
                p.pan09_02.set_cssclass("pal_WF_DtlBg");
                p.pan09_02.move("0","37","100.00%","387",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div07.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div07.form
            obj = new Layout("Layout0","",0,0,this.div07.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div07.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,900,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("작업내용(전산실작업)");

                p.Panel00.set_taborder("0");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_type("vertical");
                p.Panel00.move("0","0","100.00%","3634",null,null);

                p.staSubTitle.set_taborder("1");
                p.staSubTitle.set_text("타부서 작업통지 확인");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("242","70","100%","50",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_spacing("0px 10px 0px 10px");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.move("930","70","194","50",null,null);

                p.Panel01.set_taborder("3");
                p.Panel01.set_flexcrossaxisalign("end");
                p.Panel01.move("242","70","100%","70",null,null);

                p.Button00.set_taborder("4");
                p.Button00.set_cssclass("btn_WF_ACPlus");
                p.Button00.set_visible("false");
                p.Button00.move("595.00","20","34","34",null,null);

                p.Button01.set_taborder("5");
                p.Button01.set_cssclass("btn_WF_ACMinus");
                p.Button01.move("540.00","10","34","34",null,null);

                p.staSubTitle01.set_taborder("6");
                p.staSubTitle01.set_text("첨부(구비서류)");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("65","830","100%","50",null,null);

                p.Panel02_01.set_taborder("7");
                p.Panel02_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel02_01.set_flexcrossaxisalign("center");
                p.Panel02_01.set_flexmainaxisalign("end");
                p.Panel02_01.set_horizontalgap("10");
                p.Panel02_01.set_spacing("0px 10px 0px 10px");
                p.Panel02_01.move("752","830","194","50",null,null);

                p.Panel03_00.set_taborder("8");
                p.Panel03_00.set_flexcrossaxisalign("end");
                p.Panel03_00.set_minheight("70");
                p.Panel03_00.set_maxheight("");
                p.Panel03_00.move("65","830","100%","70",null,null);

                p.Button02.set_taborder("9");
                p.Button02.set_cssclass("btn_WF_ACPlus");
                p.Button02.set_visible("false");
                p.Button02.move("1197.00","785","34","34",null,null);

                p.Button01_01.set_taborder("10");
                p.Button01_01.set_cssclass("btn_WF_ACMinus");
                p.Button01_01.move("1185.00","790","34","34",null,null);

                p.staSubTitle02.set_taborder("11");
                p.staSubTitle02.set_text("신청자전달사항");
                p.staSubTitle02.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle02.move("156","1750","100%","50",null,null);

                p.Panel00_04.set_taborder("12");
                p.Panel00_04.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_04.set_flexcrossaxisalign("center");
                p.Panel00_04.set_flexmainaxisalign("end");
                p.Panel00_04.set_horizontalgap("10");
                p.Panel00_04.set_spacing("0px 10px 0px 10px");
                p.Panel00_04.move("845","1750","194","50",null,null);

                p.Panel01_01.set_taborder("13");
                p.Panel01_01.set_flexcrossaxisalign("end");
                p.Panel01_01.set_minheight("70");
                p.Panel01_01.set_maxheight("");
                p.Panel01_01.move("156","1750","100%","70",null,null);

                p.Button01_02.set_taborder("14");
                p.Button01_02.set_cssclass("btn_WF_ACPlus");
                p.Button01_02.set_visible("false");
                p.Button01_02.move("1191.00","1700","34","34",null,null);

                p.Button00_04.set_taborder("15");
                p.Button00_04.set_cssclass("btn_WF_ACMinus");
                p.Button00_04.move("1201.00","1720","34","34",null,null);

                p.Panel06_01.set_taborder("16");
                p.Panel06_01.set_flexcrossaxisalign("end");
                p.Panel06_01.set_minheight("70");
                p.Panel06_01.set_maxheight("");
                p.Panel06_01.move("0","0","100%","70",null,null);

                p.staSubTitle06_01_01.set_taborder("17");
                p.staSubTitle06_01_01.set_text("작업감독자검토의견");
                p.staSubTitle06_01_01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle06_01_01.move("0","0","100%","50",null,null);

                p.Panel06_01_01.set_taborder("18");
                p.Panel06_01_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel06_01_01.set_flexcrossaxisalign("center");
                p.Panel06_01_01.set_flexmainaxisalign("end");
                p.Panel06_01_01.set_horizontalgap("10");
                p.Panel06_01_01.set_spacing("0px 10px 0px 10px");
                p.Panel06_01_01.move("1111","0","194","50",null,null);

                p.Button06_01_01.set_taborder("19");
                p.Button06_01_01.set_cssclass("btn_WF_ACMinus");
                p.Button06_01_01.move("80","7","34","34",null,null);

                p.Button06_01_02.set_taborder("20");
                p.Button06_01_02.set_cssclass("btn_WF_ACPlus");
                p.Button06_01_02.set_visible("false");
                p.Button06_01_02.move("124","9","34","34",null,null);

                p.Panel07_01.set_taborder("21");
                p.Panel07_01.set_flexcrossaxisalign("end");
                p.Panel07_01.move("0","0","100%","70",null,null);

                p.staSubTitle07_01_01.set_taborder("22");
                p.staSubTitle07_01_01.set_text("운영자회사담당자검토의견");
                p.staSubTitle07_01_01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle07_01_01.move("0","0","100%","50",null,null);

                p.Panel00_07_01_01.set_taborder("23");
                p.Panel00_07_01_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_07_01_01.set_flexcrossaxisalign("center");
                p.Panel00_07_01_01.set_flexmainaxisalign("end");
                p.Panel00_07_01_01.set_horizontalgap("10");
                p.Panel00_07_01_01.set_spacing("0px 10px 0px 10px");
                p.Panel00_07_01_01.move("1111","0","194","50",null,null);

                p.Button07_01_01.set_taborder("24");
                p.Button07_01_01.set_cssclass("btn_WF_ACMinus");
                p.Button07_01_01.move("80","7","34","34",null,null);

                p.Button07_01_02.set_taborder("25");
                p.Button07_01_02.set_cssclass("btn_WF_ACPlus");
                p.Button07_01_02.set_visible("false");
                p.Button07_01_02.move("124","9","34","34",null,null);

                p.Panel08_01.set_taborder("26");
                p.Panel08_01.set_flexcrossaxisalign("end");
                p.Panel08_01.set_minheight("70");
                p.Panel08_01.set_maxheight("");
                p.Panel08_01.move("0","0","100%","70",null,null);

                p.staSubTitle08_01_01.set_taborder("27");
                p.staSubTitle08_01_01.set_text("전산실감독자검토의견");
                p.staSubTitle08_01_01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle08_01_01.move("0","0","100%","50",null,null);

                p.Panel008_01_01.set_taborder("28");
                p.Panel008_01_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel008_01_01.set_flexcrossaxisalign("center");
                p.Panel008_01_01.set_flexmainaxisalign("end");
                p.Panel008_01_01.set_horizontalgap("10");
                p.Panel008_01_01.set_spacing("0px 10px 0px 10px");
                p.Panel008_01_01.move("1111","0","194","50",null,null);

                p.Button08_01_01.set_taborder("29");
                p.Button08_01_01.set_cssclass("btn_WF_ACMinus");
                p.Button08_01_01.move("80","7","34","34",null,null);

                p.Button08_01_02.set_taborder("30");
                p.Button08_01_02.set_cssclass("btn_WF_ACPlus");
                p.Button08_01_02.set_visible("false");
                p.Button08_01_02.move("124","9","34","34",null,null);

                p.Panel09_01.set_taborder("31");
                p.Panel09_01.set_flexcrossaxisalign("end");
                p.Panel09_01.set_minheight("70");
                p.Panel09_01.set_maxheight("");
                p.Panel09_01.move("0","0","100%","70",null,null);

                p.staSubTitle09_01.set_taborder("32");
                p.staSubTitle09_01.set_text("전달사항");
                p.staSubTitle09_01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle09_01.move("0","0","100%","50",null,null);

                p.Panel09_01_01.set_taborder("33");
                p.Panel09_01_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel09_01_01.set_flexcrossaxisalign("center");
                p.Panel09_01_01.set_flexmainaxisalign("end");
                p.Panel09_01_01.set_horizontalgap("10");
                p.Panel09_01_01.set_spacing("0px 10px 0px 10px");
                p.Panel09_01_01.move("1111","0","194","50",null,null);

                p.Button09_01_01.set_taborder("34");
                p.Button09_01_01.set_cssclass("btn_WF_ACMinus");
                p.Button09_01_01.move("80","7","34","34",null,null);

                p.Button09_01_02.set_taborder("35");
                p.Button09_01_02.set_cssclass("btn_WF_ACPlus");
                p.Button09_01_02.set_visible("false");
                p.Button09_01_02.move("124","9","34","34",null,null);

                p.div00.set_taborder("36");
                p.div00.set_text("div00");
                p.div00.set_fittocontents("height");
                p.div00.move("113","216","100.00%","216",null,null);

                p.staSubTitle00.set_taborder("37");
                p.staSubTitle00.set_text("작업내용");
                p.staSubTitle00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00.move("90","425","100%","50",null,null);

                p.Button01_00.set_taborder("38");
                p.Button01_00.set_cssclass("btn_WF_ACPlus");
                p.Button01_00.set_visible("false");
                p.Button01_00.move("1170.00","365","34","34",null,null);

                p.Button00_00.set_taborder("39");
                p.Button00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00.move("1187.00","365","34","34",null,null);

                p.Panel00_01.set_taborder("40");
                p.Panel00_01.set_spacing("0px 10px 0px 10px");
                p.Panel00_01.set_horizontalgap("10");
                p.Panel00_01.set_flexcrossaxisalign("center");
                p.Panel00_01.set_flexmainaxisalign("end");
                p.Panel00_01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_01.move("775","425","194","50",null,null);

                p.Panel01_00.set_taborder("41");
                p.Panel01_00.set_flexcrossaxisalign("end");
                p.Panel01_00.move("10","10","100.00%","70",null,null);

                p.div01.set_taborder("42");
                p.div01.set_text("div01");
                p.div01.set_fittocontents("height");
                p.div01.move("176","533","100.00%","265",null,null);

                p.div02.set_taborder("43");
                p.div02.set_text("div02");
                p.div02.set_fittocontents("height");
                p.div02.move("290","855","100.00%","880",null,null);

                p.div03.set_taborder("44");
                p.div03.set_text("div03");
                p.div03.set_fittocontents("height");
                p.div03.move("264","1726","100.00%","165",null,null);

                p.div04.set_taborder("45");
                p.div04.set_text("div04");
                p.div04.set_fittocontents("height");
                p.div04.move("354","2110","100.00%","387",null,null);

                p.div05.set_taborder("46");
                p.div05.set_text("div05");
                p.div05.set_fittocontents("height");
                p.div05.move("364","2528","100.00%","387",null,null);

                p.div06.set_taborder("47");
                p.div06.set_text("div06");
                p.div06.set_fittocontents("height");
                p.div06.move("228","2922","100.00%","387",null,null);

                p.div07.set_taborder("48");
                p.div07.set_text("div07");
                p.div07.set_fittocontents("height");
                p.div07.move("330","3282","100.00%","387",null,null);
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
                p.Panel00.set_spacing("0px 20px 10px 20px");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div00.form.rdoOtherDeptJobAvtsmtIdntyYn","value","dsCmproMst","otherDeptJobAvtsmtIdntyYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div07.form.txtCnvyMttrCn","value","dsCmproMst","cnvyMttrCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div05.form.TextArea07_02_01","value","dsCmproMst","rvwRsltCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div06.form.TextArea08_02_01","value","dsCmproMst","mngrRvwRsltCn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div04.form.TextArea06_02_01","value","dsFcltOperMst","cnvyMttrCn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST016M04.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST016M04.xfdl", function() {
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
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); 								//필수함수
        	this.dsCmproDtl 	= this.lookup("dsCmproDtl");		//작업내용상세
        	this.RaonkUpload 	= this.lookup("RaonkUpload");		//Raonk Upload
        	this.dsFile			= this.lookup("dsFile");			//첨부파일 컬럼 id
        	this.dsAtfl 		= this.lookup("dsAtfl");			//첨부파일 목록
        	this.dsAtflDn 		= this.lookup("dsAtflDn");			//다운로드 첨부파일 정보
        	this.dsCnvyMttrCn 	= this.lookup("dsCnvyMttrCn");		//전달의견
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
         * @name : divGrd_btnGrdAdd_onclick
         * @description : 추가버튼
         ***************************************************************************/
        this.divGrd_btnGrdAdd_onclick = function(obj,e)
        {
        	//var maxDate = (this.dsCmproDtl.getMax("jobYmd")).toString();
        	//maxDate = this.gfnIsNull(maxDate) ? this.gfnGetDate() : this.gfnAddDate(maxDate,1);

        	this.dsCmproDtl.addRow();
        	this.dsCmproDtl.setColumn(this.dsCmproDtl.rowposition, "jobYmd"   , this.gfnGetDate());
        	this.dsCmproDtl.setColumn(this.dsCmproDtl.rowposition, "jobBgngHr", "0000");
        	this.dsCmproDtl.setColumn(this.dsCmproDtl.rowposition, "jobEndHr" , "2300");
        };

        /**************************************************************************
         * @name : divGrd_btnGrdDel_onclick
         * @description : 삭제버튼
         ***************************************************************************/
        this.divGrd_btnGrdDel_onclick = function(obj,e)
        {
        	//alert(this.dsCmproDtl.rowposition);

        };

        /**************************************************************************
         * @name : FileAtch_onclick
         * @description : 첨부파일 버튼
         ***************************************************************************/
        this.FileAtch_onclick = function(obj,e)
        {
        	// 첨부파일 선택 창 열기
        	this.cfnSetAtflInfo(this.RaonkUpload, obj).OpenFileDialog();
        };

        //파일다운,파일찾기,파일삭제
        this.Grid_oncellclick = function(obj,e)
        {
        	var colId = "";
        	switch(obj.name) {
        		case "grdJobWtnt":	//작업신고서
        			colId = "A110";
        			break;
        		case "grdEdpEqpmntincmgAplcfm":	//전산장비반출입신청서
        			colId = "B110";
        			break;
        		case "grdSpfaWritg":	//제원조사서
        			colId = "C110";
        			break;
        		case "grdSysInstlWtpl":	//시스템설치계획서
        			colId = "D110";
        			break;
        		case "grdDtlJobStmt":	//세부작업내역서
        			colId = "E110";
        			break;
        		default:
        	}

        	//작업신고서
        	if(e.col == 0) {
        		//파일다운로드
        		this.dsAtflDn.deleteAll();
        		var row = this.dsAtfl.findRow("colId", colId);
        		if(row > 0) {
        			this.dsAtflDn.addRow();
        			this.dsAtflDn.copyRow(0, this.dsAtfl, row);
        			this.gfnDownloadFile(this.RaonkUpload, this.dsAtflDn, e);
        		}
        	} else if (e.col == 1){
        		this.cfnSetAtflInfo(this.RaonkUpload, obj).OpenFileDialog();	//파일찾기
        	} else if (e.col == 2) {
        		this.cfnSetAtflInfo(this.RaonkUpload, obj).cfnDelAtfl();		//파일삭제
        	}
        };

        //타부서작업통지 확인
        this.Button01_onclick = function(obj,e)
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
        //작업내용
        this.Button00_00_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div01.visible = true;
        	} else {
        		this.div01.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.div01.form.resetScroll();
        };
        //첨부
        this.Button01_01_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div02.visible = true;
        	} else {
        		this.div02.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.div02.form.resetScroll();
        };
        //신청자전달사항
        this.Button00_04_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div02.visible = true;
        	} else {
        		this.div02.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.div02.form.resetScroll();
        };
        //작업감독자검토의견
        this.Button06_01_01_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div04.visible = true;
        	} else {
        		this.div04.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.div04.form.resetScroll();
        };
        //운영자회사담당자검토의견
        this.Button07_01_01_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div05.visible = true;
        	} else {
        		this.div05.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.div05.form.resetScroll();
        };
        //전산실감독자검토의견
        this.Button08_01_01_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div06.visible = true;
        	} else {
        		this.div06.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.div06.form.resetScroll();
        };
        //전달사항
        this.Button09_01_01_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div07.visible = true;
        	} else {
        		this.div07.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.div07.form.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button01_01.addEventHandler("onclick",this.Button01_01_onclick,this);
            this.Button00_04.addEventHandler("onclick",this.Button00_04_onclick,this);
            this.Button06_01_01.addEventHandler("onclick",this.Button06_01_01_onclick,this);
            this.Button07_01_01.addEventHandler("onclick",this.Button07_01_01_onclick,this);
            this.Button08_01_01.addEventHandler("onclick",this.Button08_01_01_onclick,this);
            this.Button09_01_01.addEventHandler("onclick",this.Button09_01_01_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.div01.form.btnGrdAdd.addEventHandler("onclick",this.divGrd_btnGrdAdd_onclick,this);
            this.div01.form.btnGrdDel.addEventHandler("onclick",this.divGrd_btnGrdDel_onclick,this);
            this.div02.form.grdJobWtnt.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.div02.form.grdEdpEqpmntincmgAplcfm.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.div02.form.grdSpfaWritg.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.div02.form.grdSysInstlWtpl.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.div02.form.grdDtlJobStmt.addEventHandler("oncellclick",this.Grid_oncellclick,this);
        };
        this.loadIncludeScript("CST016M04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
