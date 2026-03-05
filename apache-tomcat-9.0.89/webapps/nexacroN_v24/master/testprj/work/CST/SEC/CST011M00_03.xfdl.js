(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST011M00");
            this.set_titletext("보안위해물품보유(보호구역)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Panel("Panel00","0","0","100.00%","987",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_00_00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"pan02\"/><PanelItem id=\"PanelItem07\" componentid=\"pan02_00\"/><PanelItem id=\"PanelItem06\" componentid=\"pan02_01\"/><PanelItem id=\"PanelItem05\" componentid=\"panelSmYn1\"/><PanelItem id=\"PanelItem08\" componentid=\"pan05_00_00_00_00\"/><PanelItem id=\"PanelItem10\" componentid=\"pan02_02\"/><PanelItem id=\"PanelItem09\" componentid=\"panelSmYn2\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","83","73","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("보안위해물품보유 주관사");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","713","73","191","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnFold01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","83","73","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnFold01","500.00","40","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00","26.00","152","100%","86",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"raSprvsnCoMngRbprsn1SmYn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","132","Panel03:0","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("■ 국가항공보안계획 8.5.4에 따라 보호구역 내 위해물품 관리책임자는 정, 부 별도로 지정 (동일인 지정 시 불승인)");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("pan05_00_00_00","6","Static00:0","100%","96",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_00","30.00","340","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("주관사 관리책임자(정)");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Radio("raSprvsnCoMngRbprsn1SmYn","0.00","390","33.98%","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var raSprvsnCoMngRbprsn1SmYn_innerdataset = new nexacro.NormalDataset("raSprvsnCoMngRbprsn1SmYn_innerdataset", obj);
            raSprvsnCoMngRbprsn1SmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">신청자정보와동일</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">신청자정보와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(raSprvsnCoMngRbprsn1SmYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","0","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("주관사 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoNm","0","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","0","300","86",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSprvsnCoNm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("주관사 부서명");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoDeptNm","10.00","56","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","420.00","0","300","86",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSprvsnCoDeptNm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02","1440","pan05_00_00_00:0","100%","96",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_00","0","pan02:0","100%","96",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_01","0","pan02_00:0","100%","96",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_02","0","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("주관사 관리책임자(정)");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoMngRbprsn1Nm","0","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_readonly("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_02","20.00","0","300","86",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSprvsnCoMngRbprsn1Nm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_01","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("주관사 휴대전화번호(정)");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_01","420.00","0","300","86",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel11\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","20.00","20","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("주관사 회사번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01","30.00","10","300","86",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel18\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panBlank","420.00","0","300","1",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","0","0","300","46",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("주관사 관리책임자(정)의 개인정보수집및 이용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnAplyFile1","0.00","0","95","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("동의서보관함");
            obj.set_fittocontents("width");
            obj.set_flexshrink("1");
            obj.set_cssclass("btn_WF_Small");
            this.addChild(obj.name, obj);

            obj = new Button("btnSampleDown1","95.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpload01","203.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            obj.getSetter("upatchsecd").set("H01");
            obj.getSetter("upcolid").set("sprvsn01");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","46","300","46",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnAplyFile1\"/><PanelItem id=\"PanelItem01\" componentid=\"btnSampleDown1\"/><PanelItem id=\"PanelItem02\" componentid=\"btnUpload01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_horizontalgap("10");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","94","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("JPG,JPEG,GIF,PNG,BMP,PDF만 첨부가능(단, PDF는 1장만 첨부가능)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","20.00","10","100%","150",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdSprvsn01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panelSmYn1","0","pan02_01:0","100.00%","171",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("주관사 관리책임자(부)");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Radio("raSprvsnCoMngRbprsn2SmYn","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var raSprvsnCoMngRbprsn2SmYn_innerdataset = new nexacro.NormalDataset("raSprvsnCoMngRbprsn2SmYn_innerdataset", obj);
            raSprvsnCoMngRbprsn2SmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">신청자정보와동일</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">신청자정보와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(raSprvsnCoMngRbprsn2SmYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00_00","20.00","0","100%","86",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"raSprvsnCoMngRbprsn2SmYn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan05_00_00_00_00","0","panelSmYn1:0","100%","96",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00","0.00","0","300","46",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("주관사 관리책임자(부)의 개인정보수집및 이용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnAplyFile2","0.00","0","95","40",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("동의서보관함");
            obj.set_fittocontents("width");
            obj.set_flexshrink("1");
            obj.set_cssclass("btn_WF_Small");
            this.addChild(obj.name, obj);

            obj = new Button("btnSampleDown2","125.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpload02","269.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            obj.getSetter("upatchsecd").set("H02");
            obj.getSetter("upcolid").set("sprvsn02");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","395.00","0","300","46",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnAplyFile2\"/><PanelItem id=\"PanelItem01\" componentid=\"btnSampleDown2\"/><PanelItem id=\"PanelItem02\" componentid=\"btnUpload02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_horizontalgap("10");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0.00","94","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("JPG,JPEG,GIF,PNG,BMP,PDF만 첨부가능(단, PDF는 1장만 첨부가능)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","20.00","10","96.88%","140",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdSprvsn02\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_02","0","pan05_00_00_00_00:0","100%","96",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panelSmYn2","0","pan02_02:0","100%","150",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_03","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("주관사 관리책임자(부)");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoMngRbprsn2Nm","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_readonly("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_03","20.00","0","300","86",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSprvsnCoMngRbprsn2Nm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("주관사 휴대전화번호(부)");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_00","420.00","0","300","86",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel15\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","-5","Panel00:17","100.00%","1000",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan05_00_00_00_01\"/><PanelItem id=\"PanelItem04\" componentid=\"pan02_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"pan02_03\"/><PanelItem id=\"PanelItem05\" componentid=\"pan02_01_00\"/><PanelItem id=\"PanelItem06\" componentid=\"panelSmYn3\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06\"/><PanelItem id=\"PanelItem07\" componentid=\"Panel08\"/><PanelItem id=\"PanelItem08\" componentid=\"panelSmYn4\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","140","1180","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("보안위해물품보유 실제사용자");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_02","770","1180","191","50",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnFold02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","140","0","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("58");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnFold02","505.00","1052","34","33",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel05_00_00_00_00_01","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("실제사용자 관리책임자(정)");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Radio("raActlUseCoMngRbprsn1SmYn","0","46","33%","40",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var raActlUseCoMngRbprsn1SmYn_innerdataset = new nexacro.NormalDataset("raActlUseCoMngRbprsn1SmYn_innerdataset", obj);
            raActlUseCoMngRbprsn1SmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">신청자정보와동일</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">신청자정보와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(raActlUseCoMngRbprsn1SmYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Panel("pan04_00_00_00_01","20.00","0","100%","86",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel05_00_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"raActlUseCoMngRbprsn1SmYn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan05_00_00_00_01","1315","Panel03_00:0","100%","96",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_fittocontents("height");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan04_00_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_04","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("실제사용자 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edtActlUseCoNm","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_readonly("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_04","20.00","0","300","86",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_04\"/><PanelItem id=\"PanelItem01\" componentid=\"edtActlUseCoNm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Blank","420.00","0","300","1",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_00_00","1340","pan05_00_00_00_01:0","100%","96",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_03","1340","pan02_00_00:0","100%","96",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_04\"/><PanelItem id=\"PanelItem02\" componentid=\"Blank\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("실제사용자 회사번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_01_00","30.00","10","300","86",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel19\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panBlank00","430.00","10","300","1",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_02_00","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("실제사용자 관리책임자(정)");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Edit("edtActlUseCoMngRbprsn1Nm","0.00","46","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_readonly("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_02_00","20.00","0","300","86",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtActlUseCoMngRbprsn1Nm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_01_00","10.00","10","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("실제사용자 휴대전화번호(정)");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01_01_00","420.00","0","300","86",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel16\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan02_01_00","0","pan02_03:0","100%","96",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_01","0.00","0","300","46",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("실제사용자 관리책임자(정)의 개인정보수집및 이용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnAplyFile3","0.00","0","95","40",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("동의서보관함");
            obj.set_fittocontents("width");
            obj.set_flexshrink("1");
            obj.set_cssclass("btn_WF_Small");
            this.addChild(obj.name, obj);

            obj = new Button("btnSampleDown3","129.00","0","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpload03","275.00","0","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            obj.getSetter("upcolid").set("actl01");
            obj.getSetter("upatchsecd").set("H03");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","395.00","0","300","46",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"btnAplyFile3\"/><PanelItem id=\"PanelItem01\" componentid=\"btnSampleDown3\"/><PanelItem id=\"PanelItem02\" componentid=\"btnUpload03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","0.00","0","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_horizontalgap("10");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0.00","94","60.94%","40",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("JPG,JPEG,GIF,PNG,BMP,PDF만 첨부가능(단, PDF는 1장만 첨부가능)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_01","20.00","10","100%","150",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"grdActl01\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("panelSmYn3","0","pan02_01_00:0","100%","150",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","Panel04:20","100.00%","300",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"PanFold03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_04\"/><PanelItem id=\"PanelItem04\" componentid=\"pan00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","396","1740","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("보호구역 내 위해물품 사용 관련 준수사항");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","1024","1740","191","50",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnFold03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("PanFold03","396","1740","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("91");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnFold03","512.00","1682","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","100.00","1766","100%","200",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_value("보호구역 내 위해물품 및 위험물 반입 사용 시, 국가항공보안계획 및 인천국제공항 자체보안계획에서 정한 사항 준수\n보호구역 내 위해물품 및 위험물 반입은 업무에 필요한 최소 범위로 신청하며, 허가된 물품만 반입 사용 가능\n상주직원 초소 및 보호구역 내 위해물품 점검 시 작업신고서 제출 등 보안통제에 적극 협조\n보호구역 내 위해물품 및 위험물 방치 및 분식되지 않도록 관리\n\n상기 사항에 대하여 철저히 준수하며, 만일 위반사항 발생 시 관계기관 통보, 위해물품 및 위험물 반입 금지 조치,\n관련규정에 따른 보호구역 출입정지(출입증 소지자 또는 인솔자) 등의 제재와 관련하여 인천국제공항공사에 이의를 제기하지 않음을 서약합니다.");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_04","80","1756","100.00%","130",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_spacing("10px 20px 0px 20px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"TextArea00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","75.00","1807","100%","110",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem00\" componentid=\"raDgadsCmdtyUseCmpanAgreYn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","80","1866","100.00%","121",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Radio("raDgadsCmdtyUseCmpanAgreYn","650.00","1924","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var raDgadsCmdtyUseCmpanAgreYn_innerdataset = new nexacro.NormalDataset("raDgadsCmdtyUseCmpanAgreYn_innerdataset", obj);
            raDgadsCmdtyUseCmpanAgreYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">동의함</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">동의하지 않음</Col></Row></Rows>");
            obj.set_innerdataset(raDgadsCmdtyUseCmpanAgreYn_innerdataset);
            obj.set_text("신청자정보와 동일");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00","650.00","1878","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("위해물품사용 준수사항동의여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","256","panelSmYn3:0","100%","96",null,null,null,null,null,null,this);
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("0");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07","210","1665","100%","86",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"raActlUseCoMngRbprsn2SmYn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","1601","320","60",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("실제사용사 관리책임자(부)");
            obj.set_cssclass("sta_WF_Label_E");
            this.addChild(obj.name, obj);

            obj = new Radio("raActlUseCoMngRbprsn2SmYn","20","1655","33%","31",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var raActlUseCoMngRbprsn2SmYn_innerdataset = new nexacro.NormalDataset("raActlUseCoMngRbprsn2SmYn_innerdataset", obj);
            raActlUseCoMngRbprsn2SmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">신청자정보와동일</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">신청자정보와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(raActlUseCoMngRbprsn2SmYn_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08","132","1807","100%","96",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel09\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel10\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09","98","1737","300","86",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static02\"/><PanelItem id=\"PanelItem01\" componentid=\"edtActlUseCoMngRbprsn2Nm\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel10","505","1722","300","86",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel17\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","48","1707","120","46",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("실제사용자 관리책임자(부)");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","742","1710","120","46",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("실제사용자 휴대전화번호(부)");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edtActlUseCoMngRbprsn2Nm","52","1760","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            this.addChild(obj.name, obj);

            obj = new Panel("panelSmYn4","167","1841","100%","150",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexwrap("wrap");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_horizontalgap("20");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel12\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel12","230","1832","100%","150",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel13\"/><PanelItem id=\"PanelItem03\" componentid=\"grdActl02\"/><PanelItem id=\"PanelItem02\" componentid=\"Static05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel13","102","1802","100%","46",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_horizontalgap("10");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel14\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","54","1808","300","46",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("실제사용자 관리책임자(부)의 개인정보수집및 이용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel14","210","1812","300","46",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnAplyFile4\"/><PanelItem id=\"PanelItem01\" componentid=\"btnSampleDown4\"/><PanelItem id=\"PanelItem02\" componentid=\"btnUpload04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAplyFile4","772","1811","95","40",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("동의서보관함");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Small");
            this.addChild(obj.name, obj);

            obj = new Button("btnSampleDown4","1065","1798","138","40",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("동의서 양식 다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Small");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpload04","901","1804","116","40",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("파일선택");
            obj.set_cssclass("btn_WF_FileUp");
            obj.set_fittocontents("width");
            obj.getSetter("upcolid").set("actl02");
            obj.getSetter("upatchsecd").set("H04");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","35","1891","60.94%","40",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("JPG,JPEG,GIF,PNG,BMP,PDF만 첨부가능(단, PDF는 1장만 첨부가능)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel11","715","440","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"cboSprvsnCoMngRbprsn1MblTelNo1\"/><PanelItem id=\"PanelItem01\" componentid=\"Static06\"/><PanelItem id=\"PanelItem02\" componentid=\"edtSprvsnCoMngRbprsn1MblTelNo2\"/><PanelItem id=\"PanelItem03\" componentid=\"Static07\"/><PanelItem id=\"PanelItem04\" componentid=\"edtSprvsnCoMngRbprsn1MblTelNo3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","821","447","30","40",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text(" - ");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoMngRbprsn1MblTelNo2","902","445","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","1068","441","30","40",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text(" - ");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoMngRbprsn1MblTelNo3","1175","451","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSprvsnCoMngRbprsn1MblTelNo1","657","447","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_flexgrow("1");
            var cboSprvsnCoMngRbprsn1MblTelNo1_innerdataset = new nexacro.NormalDataset("cboSprvsnCoMngRbprsn1MblTelNo1_innerdataset", obj);
            cboSprvsnCoMngRbprsn1MblTelNo1_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">011</Col></Row><Row><Col id=\"codecolumn\">016</Col><Col id=\"datacolumn\">016</Col></Row><Row><Col id=\"codecolumn\">017</Col><Col id=\"datacolumn\">017</Col></Row><Row><Col id=\"codecolumn\">018</Col><Col id=\"datacolumn\">018</Col></Row><Row><Col id=\"codecolumn\">019</Col><Col id=\"datacolumn\">019</Col></Row><Row><Col id=\"codecolumn\">070</Col><Col id=\"datacolumn\">070</Col></Row></Rows>");
            obj.set_innerdataset(cboSprvsnCoMngRbprsn1MblTelNo1_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel15","692","808","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cboSprvsnCoMngRbprsn2MblTelNo1\"/><PanelItem id=\"PanelItem01\" componentid=\"Static08\"/><PanelItem id=\"PanelItem02\" componentid=\"edtSprvsnCoMngRbprsn2MblTelNo2\"/><PanelItem id=\"PanelItem03\" componentid=\"Static09\"/><PanelItem id=\"PanelItem04\" componentid=\"edtSprvsnCoMngRbprsn2MblTelNo3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSprvsnCoMngRbprsn2MblTelNo1","702","817","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_flexgrow("1");
            var cboSprvsnCoMngRbprsn2MblTelNo1_innerdataset = new nexacro.NormalDataset("cboSprvsnCoMngRbprsn2MblTelNo1_innerdataset", obj);
            cboSprvsnCoMngRbprsn2MblTelNo1_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">011</Col></Row><Row><Col id=\"codecolumn\">016</Col><Col id=\"datacolumn\">016</Col></Row><Row><Col id=\"codecolumn\">017</Col><Col id=\"datacolumn\">017</Col></Row><Row><Col id=\"codecolumn\">018</Col><Col id=\"datacolumn\">018</Col></Row><Row><Col id=\"codecolumn\">019</Col><Col id=\"datacolumn\">019</Col></Row><Row><Col id=\"codecolumn\">070</Col><Col id=\"datacolumn\">070</Col></Row></Rows>");
            obj.set_innerdataset(cboSprvsnCoMngRbprsn2MblTelNo1_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","851","811","30","40",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text(" - ");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoMngRbprsn2MblTelNo2","877","805","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_flexgrow("1");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","1091","802","30","40",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text(" - ");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoMngRbprsn2MblTelNo3","1155","807","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_flexgrow("1");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel16","688","1405","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cboActlUseCoRbprsn1MblTelno1\"/><PanelItem id=\"PanelItem01\" componentid=\"Static10\"/><PanelItem id=\"PanelItem02\" componentid=\"edtActlUseCoRbprsn1MblTelno2\"/><PanelItem id=\"PanelItem03\" componentid=\"Static11\"/><PanelItem id=\"PanelItem04\" componentid=\"edtActlUseCoRbprsn1MblTelno3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel17","678","1744","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cboActlUseCoRbprsn2MblTelno1\"/><PanelItem id=\"PanelItem01\" componentid=\"Static12\"/><PanelItem id=\"PanelItem02\" componentid=\"edtActlUseCoRbprsn2MblTelno2\"/><PanelItem id=\"PanelItem03\" componentid=\"Static13\"/><PanelItem id=\"PanelItem04\" componentid=\"edtActlUseCoRbprsn2MblTelno3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboActlUseCoRbprsn1MblTelno1","671","1410","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_flexgrow("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboActlUseCoRbprsn1MblTelno1_innerdataset = new nexacro.NormalDataset("cboActlUseCoRbprsn1MblTelno1_innerdataset", obj);
            cboActlUseCoRbprsn1MblTelno1_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">011</Col></Row><Row><Col id=\"codecolumn\">016</Col><Col id=\"datacolumn\">016</Col></Row><Row><Col id=\"codecolumn\">017</Col><Col id=\"datacolumn\">017</Col></Row><Row><Col id=\"codecolumn\">018</Col><Col id=\"datacolumn\">018</Col></Row><Row><Col id=\"codecolumn\">019</Col><Col id=\"datacolumn\">019</Col></Row><Row><Col id=\"codecolumn\">070</Col><Col id=\"datacolumn\">070</Col></Row></Rows>");
            obj.set_innerdataset(cboActlUseCoRbprsn1MblTelno1_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","824","1410","30","40",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_text(" - ");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edtActlUseCoRbprsn1MblTelno2","885","1410","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_flexgrow("1");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","1085","1412","30","40",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text(" - ");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edtActlUseCoRbprsn1MblTelno3","1125","1411","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_flexgrow("1");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Combo("cboActlUseCoRbprsn2MblTelno1","657","1755","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_flexgrow("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboActlUseCoRbprsn2MblTelno1_innerdataset = new nexacro.NormalDataset("cboActlUseCoRbprsn2MblTelno1_innerdataset", obj);
            cboActlUseCoRbprsn2MblTelno1_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">011</Col></Row><Row><Col id=\"codecolumn\">016</Col><Col id=\"datacolumn\">016</Col></Row><Row><Col id=\"codecolumn\">017</Col><Col id=\"datacolumn\">017</Col></Row><Row><Col id=\"codecolumn\">018</Col><Col id=\"datacolumn\">018</Col></Row><Row><Col id=\"codecolumn\">019</Col><Col id=\"datacolumn\">019</Col></Row><Row><Col id=\"codecolumn\">070</Col><Col id=\"datacolumn\">070</Col></Row></Rows>");
            obj.set_innerdataset(cboActlUseCoRbprsn2MblTelno1_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","827","1751","30","40",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text(" - ");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edtActlUseCoRbprsn2MblTelno2","917","1740","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_flexgrow("1");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","1061","1741","30","40",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_text(" - ");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edtActlUseCoRbprsn2MblTelno3","1172","1745","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_flexgrow("1");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel18","110","344","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cboSprvsnCoTelno1\"/><PanelItem id=\"PanelItem01\" componentid=\"Static14\"/><PanelItem id=\"PanelItem02\" componentid=\"edtSprvsnCoTelno2\"/><PanelItem id=\"PanelItem03\" componentid=\"Static15\"/><PanelItem id=\"PanelItem04\" componentid=\"edtSprvsnCoTelno3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSprvsnCoTelno1","64","345","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_flexgrow("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboSprvsnCoTelno1_innerdataset = new nexacro.NormalDataset("cboSprvsnCoTelno1_innerdataset", obj);
            cboSprvsnCoTelno1_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"datacolumn\">010</Col><Col id=\"codecolumn\">010</Col></Row><Row><Col id=\"datacolumn\">011</Col><Col id=\"codecolumn\">011</Col></Row><Row><Col id=\"datacolumn\">016</Col><Col id=\"codecolumn\">016</Col></Row><Row><Col id=\"datacolumn\">017</Col><Col id=\"codecolumn\">017</Col></Row><Row><Col id=\"datacolumn\">018</Col><Col id=\"codecolumn\">018</Col></Row><Row><Col id=\"datacolumn\">019</Col><Col id=\"codecolumn\">019</Col></Row><Row><Col id=\"datacolumn\">02</Col><Col id=\"codecolumn\">02</Col></Row><Row><Col id=\"datacolumn\">031</Col><Col id=\"codecolumn\">031</Col></Row><Row><Col id=\"datacolumn\">032</Col><Col id=\"codecolumn\">032</Col></Row><Row><Col id=\"datacolumn\">033</Col><Col id=\"codecolumn\">033</Col></Row><Row><Col id=\"datacolumn\">041</Col><Col id=\"codecolumn\">041</Col></Row><Row><Col id=\"datacolumn\">042</Col><Col id=\"codecolumn\">042</Col></Row><Row><Col id=\"datacolumn\">043</Col><Col id=\"codecolumn\">043</Col></Row><Row><Col id=\"datacolumn\">044</Col><Col id=\"codecolumn\">044</Col></Row><Row><Col id=\"datacolumn\">051</Col><Col id=\"codecolumn\">051</Col></Row><Row><Col id=\"datacolumn\">052</Col><Col id=\"codecolumn\">052</Col></Row><Row><Col id=\"datacolumn\">053</Col><Col id=\"codecolumn\">053</Col></Row><Row><Col id=\"datacolumn\">054</Col><Col id=\"codecolumn\">054</Col></Row><Row><Col id=\"datacolumn\">055</Col><Col id=\"codecolumn\">055</Col></Row><Row><Col id=\"datacolumn\">061</Col><Col id=\"codecolumn\">061</Col></Row><Row><Col id=\"datacolumn\">062</Col><Col id=\"codecolumn\">062</Col></Row><Row><Col id=\"datacolumn\">063</Col><Col id=\"codecolumn\">063</Col></Row><Row><Col id=\"datacolumn\">064</Col><Col id=\"codecolumn\">064</Col></Row><Row><Col id=\"datacolumn\">070</Col><Col id=\"codecolumn\">070</Col></Row></Rows>");
            obj.set_innerdataset(cboSprvsnCoTelno1_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","184","351","30","40",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_text(" - ");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoTelno2","240","351","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_flexgrow("1");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","460","344","30","40",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_text(" - ");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoTelno3","575","342","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_flexgrow("1");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel19","100","1213","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"cboActlUseCoTelno1\"/><PanelItem id=\"PanelItem01\" componentid=\"Static16\"/><PanelItem id=\"PanelItem02\" componentid=\"edtActlUseCoTelno2\"/><PanelItem id=\"PanelItem03\" componentid=\"Static17\"/><PanelItem id=\"PanelItem04\" componentid=\"edtActlUseCoTelno3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","195","1220","30","40",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text(" - ");
            this.addChild(obj.name, obj);

            obj = new Edit("edtActlUseCoTelno2","268","1213","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_flexgrow("1");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","470","1214","30","40",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_text(" - ");
            this.addChild(obj.name, obj);

            obj = new Edit("edtActlUseCoTelno3","557","1212","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_flexgrow("1");
            obj.set_maxlength("4");
            obj.set_inputtype("digit");
            this.addChild(obj.name, obj);

            obj = new Combo("cboActlUseCoTelno1","15","1212","150","40",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_flexgrow("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboActlUseCoTelno1_innerdataset = new nexacro.NormalDataset("cboActlUseCoTelno1_innerdataset", obj);
            cboActlUseCoTelno1_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">010</Col><Col id=\"datacolumn\">010</Col></Row><Row><Col id=\"codecolumn\">011</Col><Col id=\"datacolumn\">011</Col></Row><Row><Col id=\"codecolumn\">016</Col><Col id=\"datacolumn\">016</Col></Row><Row><Col id=\"codecolumn\">017</Col><Col id=\"datacolumn\">017</Col></Row><Row><Col id=\"codecolumn\">018</Col><Col id=\"datacolumn\">018</Col></Row><Row><Col id=\"codecolumn\">019</Col><Col id=\"datacolumn\">019</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">02</Col></Row><Row><Col id=\"codecolumn\">031</Col><Col id=\"datacolumn\">031</Col></Row><Row><Col id=\"codecolumn\">032</Col><Col id=\"datacolumn\">032</Col></Row><Row><Col id=\"codecolumn\">033</Col><Col id=\"datacolumn\">033</Col></Row><Row><Col id=\"codecolumn\">041</Col><Col id=\"datacolumn\">041</Col></Row><Row><Col id=\"codecolumn\">042</Col><Col id=\"datacolumn\">042</Col></Row><Row><Col id=\"codecolumn\">043</Col><Col id=\"datacolumn\">043</Col></Row><Row><Col id=\"codecolumn\">044</Col><Col id=\"datacolumn\">044</Col></Row><Row><Col id=\"codecolumn\">051</Col><Col id=\"datacolumn\">051</Col></Row><Row><Col id=\"codecolumn\">052</Col><Col id=\"datacolumn\">052</Col></Row><Row><Col id=\"codecolumn\">053</Col><Col id=\"datacolumn\">053</Col></Row><Row><Col id=\"codecolumn\">054</Col><Col id=\"datacolumn\">054</Col></Row><Row><Col id=\"codecolumn\">055</Col><Col id=\"datacolumn\">055</Col></Row><Row><Col id=\"codecolumn\">061</Col><Col id=\"datacolumn\">061</Col></Row><Row><Col id=\"codecolumn\">062</Col><Col id=\"datacolumn\">062</Col></Row><Row><Col id=\"codecolumn\">063</Col><Col id=\"datacolumn\">063</Col></Row><Row><Col id=\"codecolumn\">064</Col><Col id=\"datacolumn\">064</Col></Row><Row><Col id=\"codecolumn\">070</Col><Col id=\"datacolumn\">070</Col></Row></Rows>");
            obj.set_innerdataset(cboActlUseCoTelno1_innerdataset);
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSprvsn01","345.00","440","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.getSetter("upcolid").set("sprvsn01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"110\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:dataset.parent.gfnIsNull(sprvsn01OrgnlFileNm) ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:sprvsn01OrgnlFileNm\"/><Cell col=\"1\" edittype=\"expr:dataset.parent.gfnIsNull(sprvsn01OrgnlFileNm) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.gfnIsNull(sprvsn01OrgnlFileNm) ? &quot;&quot; : &quot;파일삭제&quot;\" displaytype=\"expr:dataset.parent.gfnIsNull(sprvsn01OrgnlFileNm) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" cssclass=\"expr:dataset.parent.gfnIsNull(sprvsn01OrgnlFileNm) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSprvsn02","400.00","634","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.getSetter("upcolid").set("sprvsn02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"110\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:dataset.parent.gfnIsNull(sprvsn02OrgnlFileNm) ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:sprvsn02OrgnlFileNm\"/><Cell col=\"1\" edittype=\"expr:dataset.parent.gfnIsNull(sprvsn02OrgnlFileNm) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.gfnIsNull(sprvsn02OrgnlFileNm) ? &quot;&quot; : &quot;파일삭제&quot;\" displaytype=\"expr:dataset.parent.gfnIsNull(sprvsn02OrgnlFileNm) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" cssclass=\"expr:dataset.parent.gfnIsNull(sprvsn02OrgnlFileNm) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdActl01","820.00","1256","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.getSetter("upcolid").set("actl01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"110\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:dataset.parent.gfnIsNull(actl01OrgnlFileNm) ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:actl01OrgnlFileNm\"/><Cell col=\"1\" edittype=\"expr:dataset.parent.gfnIsNull(actl01OrgnlFileNm) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.gfnIsNull(actl01OrgnlFileNm) ? &quot;&quot; : &quot;파일삭제&quot;\" displaytype=\"expr:dataset.parent.gfnIsNull(actl01OrgnlFileNm) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" cssclass=\"expr:dataset.parent.gfnIsNull(actl01OrgnlFileNm) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdActl02","624.00","1390","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.getSetter("upcolid").set("actl02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"110\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell cssclass=\"expr:dataset.parent.gfnIsNull(actl02OrgnlFileNm) ? &quot;&quot; : &quot;CellFile&quot;\" text=\"bind:actl02OrgnlFileNm\"/><Cell col=\"1\" edittype=\"expr:dataset.parent.gfnIsNull(actl02OrgnlFileNm) ? &quot;none&quot; : &quot;button&quot;\" text=\"expr:dataset.parent.gfnIsNull(actl02OrgnlFileNm) ? &quot;&quot; : &quot;파일삭제&quot;\" displaytype=\"expr:dataset.parent.gfnIsNull(actl02OrgnlFileNm) ? &quot;none&quot; : &quot;buttoncontrol&quot;\" cssclass=\"expr:dataset.parent.gfnIsNull(actl02OrgnlFileNm) ? &quot;&quot; : &quot;CellFileDel&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new RaonkUpload("RaonkUpload","72","150","648","200",null,null,null,null,null,null,this);
            obj.set_taborder("158");
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
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1280,900,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","raSprvsnCoMngRbprsn1SmYn","value","dsAply","sprvsnCoMngRbprsn1SmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","raSprvsnCoMngRbprsn2SmYn","value","dsAply","sprvsnCoMngRbprsn2SmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","raActlUseCoMngRbprsn1SmYn","value","dsAply","actlUseCoMngRbprsn1SmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","raActlUseCoMngRbprsn2SmYn","value","dsAply","actlUseCoMngRbprsn2SmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboSprvsnCoTelno1","value","dsAply","sprvsnCoTelno1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtSprvsnCoTelno2","value","dsAply","sprvsnCoTelno2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtSprvsnCoTelno3","value","dsAply","sprvsnCoTelno3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtSprvsnCoDeptNm","value","dsAply","sprvsnCoDeptNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtSprvsnCoNm","value","dsAply","sprvsnCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtSprvsnCoMngRbprsn1Nm","value","dsAply","sprvsnCoMngRbprsn1Nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cboSprvsnCoMngRbprsn1MblTelNo1","value","dsAply","sprvsnCoMngRbprsn1MblTelno1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtSprvsnCoMngRbprsn1MblTelNo2","value","dsAply","sprvsnCoMngRbprsn1MblTelno2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtSprvsnCoMngRbprsn1MblTelNo3","value","dsAply","sprvsnCoMngRbprsn1MblTelno3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtSprvsnCoMngRbprsn2Nm","value","dsAply","sprvsnCoMngRbprsn2Nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","cboSprvsnCoMngRbprsn2MblTelNo1","value","dsAply","sprvsnCoMngRbprsn2MblTelno1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edtSprvsnCoMngRbprsn2MblTelNo2","value","dsAply","sprvsnCoMngRbprsn2MblTelno2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtSprvsnCoMngRbprsn2MblTelNo3","value","dsAply","sprvsnCoMngRbprsn2MblTelno3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtActlUseCoMngRbprsn1Nm","value","dsAply","actlUseCoMngRbprsn1Nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","cboActlUseCoRbprsn1MblTelno1","value","dsAply","actlUseCoRbprsn1MblTelno1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtActlUseCoRbprsn1MblTelno2","value","dsAply","actlUseCoRbprsn1MblTelno2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edtActlUseCoRbprsn1MblTelno3","value","dsAply","actlUseCoRbprsn1MblTelno3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edtActlUseCoMngRbprsn2Nm","value","dsAply","actlUseCoMngRbprsn2Nm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","cboActlUseCoRbprsn2MblTelno1","value","dsAply","actlUseCoRbprsn2MblTelno1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","edtActlUseCoRbprsn2MblTelno2","value","dsAply","actlUseCoRbprsn2MblTelno2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","edtActlUseCoRbprsn2MblTelno3","value","dsAply","actlUseCoRbprsn2MblTelno3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edtActlUseCoNm","value","dsAply","actlUseCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","cboActlUseCoTelno1","value","dsAply","actlUseCoTelno1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","edtActlUseCoTelno2","value","dsAply","actlUseCoTelno2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","edtActlUseCoTelno3","value","dsAply","actlUseCoTelno3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","raDgadsCmdtyUseCmpanAgreYn","value","dsAply","dgadsCmdtyUseCmpanAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST011M00_03.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST011M00_03.xfdl", function() {
        /**
        *  인천국제공항공사 입주자 원스톱 서비스 프로젝트
        *  @FileName 	CST011M00_03.xfdl
        *  @Creator 	ELUON INS
        *  @CreateDate 	2024/08/08
        *  @Desction
        *  @Author
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/08			이규철						최초생성
        *******************************************************************************
        */

        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통
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

        	//  this.fnInit()
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
        //팝업 콜백 함수
        this.fnPopupCallback = function(sPopupId, oRtn)
        {
            if(this.gfnIsNull(oRtn)) { return; }

        	var dsAply = this.fvParent.dsAply;
        	var dsFile = this.fvParent.dsFile;

        	switch(sPopupId) {
        		case "btnAplyFile1" :
        			trace("주관사 관리책임자정");

        			oRtn = JSON.parse(oRtn);
        			//첨부 파일 삭제
        			this.cfnSetAtflInfo(this.RaonkUpload, this.grdSprvsn01).cfnDelAtfl();
        			dsAply.setColumn(0, "sprvsnCoMngRbprsn1PrvcClctUtztnWtcsPath", oRtn.atflMngNo);  // 첨부파일관리번호
        			dsFile.setColumn(0, "sprvsn01OrgnlFileNm", oRtn.orgnlFileNm);  // 첨부파일명

        			break;

        		case "btnAplyFile2" :
        			trace("주관사 관리책임자부");

        			oRtn = JSON.parse(oRtn);
        			//첨부 파일 삭제
        			this.cfnSetAtflInfo(this.RaonkUpload, this.grdSprvsn02).cfnDelAtfl();
        			dsAply.setColumn(0, "sprvsnCoMngRbprsn2PrvcClctUtztnWtcsPath", oRtn.atflMngNo);  // 첨부파일관리번호
        			dsFile.setColumn(0, "sprvsn02OrgnlFileNm", oRtn.orgnlFileNm);  // 첨부파일명

        			break;

        		case "btnAplyFile3" :
        			trace("실제사용자 관리책임자정");

        			oRtn = JSON.parse(oRtn);
        			//첨부 파일 삭제
        			this.cfnSetAtflInfo(this.RaonkUpload, this.grdActl01).cfnDelAtfl();
        			dsAply.setColumn(0, "actlUseCoMngRbprsn1PrvcClctUtztnWtcsPath", oRtn.atflMngNo);  // 첨부파일관리번호
        			dsFile.setColumn(0, "actl01OrgnlFileNm", oRtn.orgnlFileNm);  // 첨부파일명

        			break;

        		case "btnAplyFile4" :
        			trace("실제사용자 관리책임자부");

        			oRtn = JSON.parse(oRtn);
        			//첨부 파일 삭제
        			this.cfnSetAtflInfo(this.RaonkUpload, this.grdActl02).cfnDelAtfl();
        			dsAply.setColumn(0, "actlUseCoMngRbprsn2PrvcClctUtztnWtcsPath", oRtn.atflMngNo);  // 첨부파일관리번호
        			dsFile.setColumn(0, "actl02OrgnlFileNm", oRtn.orgnlFileNm);  // 첨부파일명

        			break;

        		default :
        			break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function () {
        	// 실제사용자
        	this.fnActlVisible(false);
        }

        // 실제사용자 영역 visible 처리
        this.fnActlVisible = function (bVisible = false) {
        	this.Panel04.visible = bVisible;
        	this.Panel05.top = bVisible ? "Panel04:17px" : "Panel00:17px";
         	this.resetScroll();
        }

        //  개인정보수집및 이용동의서 visible처리
        this.fnSmYnVisible = function (sRbprsnType, sVal) {
        	if (this.gfnIsNull(sRbprsnType)) return;
        	// if (this.gfnIsNull(sVal)) return;

        	if (sRbprsnType == "search") {
        		this.fnSmYnVisible("sprvsnCoMngRbprsn1SmYn" , this.fvParent.dsAply.getColumn(0, "sprvsnCoMngRbprsn1SmYn"));
        		this.fnSmYnVisible("sprvsnCoMngRbprsn2SmYn" , this.fvParent.dsAply.getColumn(0, "sprvsnCoMngRbprsn2SmYn"));
        		this.fnSmYnVisible("actlUseCoMngRbprsn1SmYn", this.fvParent.dsAply.getColumn(0, "actlUseCoMngRbprsn1SmYn"));
        		this.fnSmYnVisible("actlUseCoMngRbprsn2SmYn", this.fvParent.dsAply.getColumn(0, "actlUseCoMngRbprsn2SmYn"));
        	}

        	/* 동일인 경우 전화번호가 고정임 */
        	// 주관사 관리책임자(정)의 개인정보수집 및 이용동의서 [Y : 동일, N : 동일하지않음]
        	else if (sRbprsnType == "sprvsnCoMngRbprsn1SmYn") {
        		this.panelSmYn1.visible = sVal == "N";
        		// 관리책임자정, 회사명, 전화번호 1,2,3 | 부서명, 전화번호 1,2,3 추가
        		["edtSprvsnCoMngRbprsn1Nm", "edtSprvsnCoNm", "cboSprvsnCoMngRbprsn1MblTelNo1", "edtSprvsnCoMngRbprsn1MblTelNo2", "edtSprvsnCoMngRbprsn1MblTelNo3"
        		,"edtSprvsnCoDeptNm", "cboSprvsnCoTelno1", "edtSprvsnCoTelno2", "edtSprvsnCoTelno3"]
        		.forEach(sVal => this[sVal].readonly = !this.panelSmYn1.visible);
        	}

        	// 주관사 관리책임자(부)의 개인정보수집 및 이용동의서 [Y : 동일, N : 동일하지않음]
        	else if (sRbprsnType == "sprvsnCoMngRbprsn2SmYn") {
        		this.panelSmYn2.visible = sVal == "N";
        		// 관리책임자부, 전화번호 1,2,3
        		["edtSprvsnCoMngRbprsn2Nm", "cboSprvsnCoMngRbprsn2MblTelNo1", "edtSprvsnCoMngRbprsn2MblTelNo2", "edtSprvsnCoMngRbprsn2MblTelNo3"]
        		.forEach(sVal => this[sVal].readonly = !this.panelSmYn2.visible);
        	}

        	// 실제사용사 관리책임자(정)의 개인정보수집 및 이용동의서 [Y : 동일, N : 동일하지않음]
        	else if (sRbprsnType == "actlUseCoMngRbprsn1SmYn") {
        		this.panelSmYn3.visible = sVal == "N";
        		// 회사명, 관리책임자정, 전화번호 컴포넌트 | 실제사용자 회사번호 1,2,3 추가
        		["cboActlUseCoTelno1", "edtActlUseCoTelno2", "edtActlUseCoTelno3"
        		,"edtActlUseCoMngRbprsn1Nm", "edtActlUseCoNm", "cboActlUseCoRbprsn1MblTelno1", "edtActlUseCoRbprsn1MblTelno2", "edtActlUseCoRbprsn1MblTelno3"]
        		.forEach(sVal => this[sVal].readonly = !this.panelSmYn3.visible);
        	}

        	// 실제사용사 관리책임자(부)의 개인정보수집 및 이용동의서 [Y : 동일, N : 동일하지않음]
        	else if (sRbprsnType == "actlUseCoMngRbprsn2SmYn") {
        		this.panelSmYn4.visible = sVal == "N";
        		// 전화번호 컴포넌트
        		["edtActlUseCoMngRbprsn2Nm", "cboActlUseCoRbprsn2MblTelno1", "edtActlUseCoRbprsn2MblTelno2", "edtActlUseCoRbprsn2MblTelno3"]
        		.forEach(sVal => {
        			// 동일한 경우 세션값에서 불러옴
        			this[sVal].readonly = !this.panelSmYn4.visible;
        		});
        	}

        	this.resetScroll();
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //파일 업로드 관련(2024-12-04)
        this.btnUpload01_onclick = function(obj,e)
        {
        	//RaonkUpload 세팅 위해 버튼ID에 따른 그리드 정보 넘겨줌
        	var grdObj;
        	if(obj.id == "btnUpload01") {
        		grdObj = this.grdSprvsn01;
        	} else if(obj.id == "btnUpload02") {
        		grdObj = this.grdSprvsn02;
        	} else if(obj.id == "btnUpload03") {
        		grdObj = this.grdActl01;
        	} else if(obj.id == "btnUpload04") {
        		grdObj = this.grdActl02;
        	}
        	this.cfnSetAtflInfo(this.RaonkUpload, grdObj).OpenFileDialog();
        };

        //파일 업로드 관련(2024-12-03)
        this.RaonkUpload_RAONKUPLOAD_CreationComplete = function(obj,  paramObj)
        {
        	trace(" >>> RaonkUpload_RAONKUPLOAD_CreationComplete");

        	// 업로드 솔루션이 초기 생성시 업로드 할 경로를 지정해야 한다.
        	// /CMM/YYYY/MM/DD/  <<== CMM은 업무별 폴더 지정이고 기본적으로 /년도/월/일 의 폴더 구조를 갖는다.
        	this.RaonkUpload.SetConfig('FolderNameRule', '/CST/SEC/YYYY/MM/DD/');
        	var dsAtfl = this.fvParent.dsAtfl;
        	var dsFile = this.fvParent.dsFile;

        	// (일반)첨부 파일 추가 함수
            obj.cfnAddAtfl = function(oFile) {
        		// 이미 첨부된 파일이 있으면 기존 파일 삭제
        		this.cfnDelAtfl();

        		// RaonkUpload에 컬럼ID 설정
        		this.SetFileCustomValue(-1, JSON.stringify({ "strCustomValue" : this.upatflinfo.colid }));

        		// 첨부파일 DS에 추가
        		var nRow = dsAtfl.findRow("colId", this.upatflinfo.colid);
        			nRow = Math.max(nRow, 0) ? nRow : dsAtfl.addRow();
        		dsAtfl.setColumn(nRow, "colId", this.upatflinfo.colid);  // 컬럼ID

        		// 첨부 파일 표출용 DS 설정
        		dsFile.setColumn(0, this.upatflinfo.colid, oFile.userdata.strName + '(' + oFile.userdata.nSize + ')');  // 파일풀명
        	};

        	// (일반)첨부 파일 삭제
            obj.cfnDelAtfl = function() {
        		// 첨부 파일 표출용 DS 설정
        		dsFile.setColumn(0, this.upatflinfo.colid, "");  // 파일풀명

        		// 존재하지 않으면 돌아감
        		var nRow = dsAtfl.findRow("colId", this.upatflinfo.colid);
        		if(nRow == -1) { return; }

        		// RaonkUpload mergeFile 삭제
        		if(this.GetListInfo().mergeFile) {
        		    var RaonkUpload       = this;
        			var cfnGetCustomValue = this.parent.cfnGetCustomValue;
        			this.GetListInfo().mergeFile.forEach(function(v, i, o) {
        				if(cfnGetCustomValue(v.customValue) == RaonkUpload.upatflinfo.colid) {
        					RaonkUpload.SetSelectFile(i, '0');
        					RaonkUpload.DeleteSelectedFile();
        				}
        			});
        		}

        		console.log("RaonkUpload.GetListInfo().mergeFile========" + this.GetListInfo().mergeFile);
        		if(this.GetListInfo().mergeFile) {
        			console.log("RaonkUpload.GetListInfo().mergeFile.length=" + this.GetListInfo().mergeFile.length);
        		}

        		// 첨부파일 삭제
        		dsAtfl.deleteRow(dsAtfl.findRow("colId", this.upatflinfo.colid));

        		// 첨부 파일 표출용 DS 설정
        		dsFile.setColumn(0, this.upatflinfo.colid, "");  // 파일풀명
        	};
        };


        this.RaonkUpload_RAONKUPLOAD_BeforeAddFile = function(obj, paramObj)
        {
        	trace(" >>> RaonkUpload_RAONKUPLOAD_BeforeAddFile");
        	console.log(paramObj);

        	return true;
        };

        //파일 업로드 관련(2024-12-03)
        this.RaonkUpload_RAONKUPLOAD_AfterAddFile = function(obj, e)
        {
        	trace(" >>> RaonkUpload_RAONKUPLOAD_AfterAddFile");

        	// 첨부 파일 추가
        	obj.cfnAddAtfl(e);
        };

        this.RaonkUpload_RAONKUPLOAD_OnError = function(obj, paramObj)
        {
        	trace(" >>> RaonkUpload_RAONKUPLOAD_OnError");
        	trace(paramObj.userdata.strMessage);

            // 파일 업로드 중 오류가 발생했습니다!
        	this.gfnAlertMsg(this.RaonkUpload.name, "MSG_007", [paramObj.userdata.strMessage]);
        };

        //파일 업로드 관련(2024-12-03)
        this.RaonkUpload_RAONKUPLOAD_UploadComplete = function(obj, e)
        {
        	trace(" >>> RaonkUpload_RAONKUPLOAD_UploadComplete");
        	var allListArray = this.RaonkUpload.GetListInfo("json");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	console.log(allListArray);

        	//this.gfnUploadComplete.call(this.fvParent, e.eventid, allListArray, "dsAtchRslt", "fnCallback");
        	// 파일 업로드 후 첨부파일관리번호를 얻기 위한 함수
        	this.gfnUploadComplete(e.eventid, allListArray, "dsAtchRslt", "fnCallback");
        };

        //파일 그리드 관련(2024-12-03)
        this.Grid_oncellclick = function(obj,e)
        {
        	// 그리드 내의 버튼 클릭
            if(e.col == 0) {
        		if(obj.getCellPropertyValue(0, 0, "cssclass") == "CellFile") {  // 파일
        			// 파일 다운로드
        			this.cfnFileDwnld(this.RaonkUpload, this.fvParent.dsAtfl, obj.getCellProperty("body", 0, "text").substr(5), e);
        		}
            } else if(e.col == 1) {
        		if(obj.getCellPropertyValue(0, 1, "edittype") != "none") {
        			if(obj.getCellPropertyValue(0, 1, "cssclass") == "CellFileUp") {  // 파일찾기
        				// 첨부파일 선택 창 열기
        				this.cfnSetAtflInfo(this.RaonkUpload, obj).OpenFileDialog();
        			} else if(obj.getCellPropertyValue(0, 1, "cssclass") == "CellFileDel") {  // 파일삭제
        				// 첨부 파일 삭제
        				this.cfnSetAtflInfo(this.RaonkUpload, obj).cfnDelAtfl();
        			}
        		}
        	}
        };

        //동의서 보관함
        this.btnAplyFile1_onclick = function(obj,e)
        {
        	var sTitle = "";
        	if(obj.name == "btnAplyFile1" || obj.name == "btnAplyFile2") {
        		sTitle = "주관사";
        	} else {
        		sTitle = "실제사용자";
        	}
        	var oOption = { title:sTitle + " 개인정보 수집•이용 동의서 찾기", titlebar:true, width:900, height:700 };
        	var oArg = {
        	      wtcsCtgryCd : "TSPSEC001"
        	};
        	this.gfnOpenPopup(obj.name, "work::CST/TSC/CST006P17.xfdl", oArg, "fnPopupCallback", oOption);
        };

        //동의서 양식 다운로드(주관사 정)
        this.btnSampleDown1_onclick = function(obj,e)
        {
        	trace("동의서 양식_실제 동의서 양식파일로 업로드 필요");
        	if(obj.name == "btnSampleDown1") {
        		this.gfnNormalDownload("CST011M00", "agreeSample01");
        	} else if(obj.name == "btnSampleDown2") {
        		this.gfnNormalDownload("CST011M00", "agreeSample02");
        	} else if(obj.name == "btnSampleDown3") {
        		this.gfnNormalDownload("CST011M00", "agreeSample03");
        	} else if(obj.name == "btnSampleDown4") {
        		this.gfnNormalDownload("CST011M00", "agreeSample04");
        	}
        };

        //주관사 fold
        this.btnFold01_onclick = function(obj,e)
        {
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	var bVisible = obj.cssclass != "btn_WF_ACPlus";

        	this.Static00.visible = bVisible;
        	this.pan05_00_00_00.visible = bVisible;
        	this.pan02.visible = bVisible;
        	this.pan02_00.visible = bVisible;
        	this.pan02_01.visible = bVisible;
        	this.panelSmYn1.visible = bVisible;
        	this.pan05_00_00_00_00.visible = bVisible;
        	this.pan02_02.visible = bVisible;
        	this.panelSmYn2.visible = bVisible;

        	//신청자와 동일하면 첨부파일 안 보여줌(정)
        	if(this.fvParent.dsAply.getColumn(0, "sprvsnCoMngRbprsn1SmYn") == "Y" ) {
        		this.panelSmYn1.visible = false;
        	}

        	//신청자와 동일하면 첨부파일 안 보여줌(부)
        	if(this.fvParent.dsAply.getColumn(0, "sprvsnCoMngRbprsn2SmYn") == "Y" ) {
        		this.panelSmYn2.visible = false;
        	}

        	this.resetScroll();
        };

        //실사용자 fold
        this.btnFold02_onclick = function(obj,e)
        {
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	var bVisible = obj.cssclass != "btn_WF_ACPlus";

        	this.pan05_00_00_00_01.visible = bVisible;
        	this.pan02_00_00.visible = bVisible;
        	this.pan02_03.visible = bVisible;
        	this.pan02_01_00.visible = bVisible;
        	this.panelSmYn3.visible = bVisible;
        	this.Panel06.visible = bVisible;
        	this.Panel08.visible = bVisible;
        	this.panelSmYn4.visible = bVisible;

        	//신청자와 동일하면 첨부파일 안 보여줌(정)
        	if(this.fvParent.dsAply.getColumn(0, "actlUseCoMngRbprsn1SmYn") == "Y" ) {
        		this.panelSmYn3.visible = false;
        	}

        	//신청자와 동일하면 첨부파일 안 보여줌(부)
        	if(this.fvParent.dsAply.getColumn(0, "actlUseCoMngRbprsn2SmYn") == "Y" ) {
        		this.panelSmYn4.visible = false;
        	}

        	this.resetScroll();
        };

        //준수사항 fold
        this.btnFold03_onclick = function(obj,e)
        {
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	var bVisible = obj.cssclass != "btn_WF_ACPlus";

        	this.Panel02_04.visible = bVisible;
        	this.pan00.visible = bVisible;

        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.accordionmenu_onload,this);
            this.btnFold01.addEventHandler("onclick",this.btnFold01_onclick,this);
            this.btnAplyFile1.addEventHandler("onclick",this.btnAplyFile1_onclick,this);
            this.btnSampleDown1.addEventHandler("onclick",this.btnSampleDown1_onclick,this);
            this.btnUpload01.addEventHandler("onclick",this.btnUpload01_onclick,this);
            this.raSprvsnCoMngRbprsn2SmYn.addEventHandler("onitemchanged",this.divForm_div00_00_Radio00_onitemchanged,this);
            this.btnAplyFile2.addEventHandler("onclick",this.btnAplyFile1_onclick,this);
            this.btnSampleDown2.addEventHandler("onclick",this.btnSampleDown1_onclick,this);
            this.btnUpload02.addEventHandler("onclick",this.btnUpload01_onclick,this);
            this.btnFold02.addEventHandler("onclick",this.btnFold02_onclick,this);
            this.raActlUseCoMngRbprsn1SmYn.addEventHandler("onitemchanged",this.divForm_div00_00_Radio00_onitemchanged,this);
            this.btnAplyFile3.addEventHandler("onclick",this.btnAplyFile1_onclick,this);
            this.btnSampleDown3.addEventHandler("onclick",this.btnSampleDown1_onclick,this);
            this.btnUpload03.addEventHandler("onclick",this.btnUpload01_onclick,this);
            this.btnFold03.addEventHandler("onclick",this.btnFold03_onclick,this);
            this.btnAplyFile4.addEventHandler("onclick",this.btnAplyFile1_onclick,this);
            this.btnSampleDown4.addEventHandler("onclick",this.btnSampleDown1_onclick,this);
            this.btnUpload04.addEventHandler("onclick",this.btnUpload01_onclick,this);
            this.grdSprvsn01.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.grdSprvsn02.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.grdActl01.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.grdActl02.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_AfterAddFile",this.RaonkUpload_RAONKUPLOAD_AfterAddFile,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_CreationComplete",this.RaonkUpload_RAONKUPLOAD_CreationComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_UploadComplete",this.RaonkUpload_RAONKUPLOAD_UploadComplete,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_OnError",this.RaonkUpload_RAONKUPLOAD_OnError,this);
            this.RaonkUpload.addEventHandler("RAONKUPLOAD_BeforeAddFile",this.RaonkUpload_RAONKUPLOAD_BeforeAddFile,this);
        };
        this.loadIncludeScript("CST011M00_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
