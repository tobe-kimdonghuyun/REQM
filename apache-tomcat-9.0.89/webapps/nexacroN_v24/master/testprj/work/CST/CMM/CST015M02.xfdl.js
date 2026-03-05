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
            this.set_titletext("신청정보(통신실작업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Panel("panForm","0","0",null,"1160","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem02\" componentid=\"div00_01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem04\" componentid=\"div00_01_02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","1468","10","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("1");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("신청정보 (주관사)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","628","0","191","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/><PanelItem id=\"PanelItem01\" componentid=\"btnFold1\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","102","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnFold1","146","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Div("div00_01_02","90","210","100%","500",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","11","48","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("3");
            obj.set_text("■ 주관사 : 공사/작업을 발주, 의뢰하는 회사 혹은 공항공사 내 담당부서");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","100",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("1");
            obj.set_text("주관사의 동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","84","305","86",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoSprvsnCoSmYn\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Radio("rdoSprvsnCoSmYn","137","143","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_01_02_form_rdoSprvsnCoSmYn_innerdataset = new nexacro.NormalDataset("div00_01_02_form_rdoSprvsnCoSmYn_innerdataset", obj);
            div00_01_02_form_rdoSprvsnCoSmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">신청자정보와동일</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">신청자정보와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(div00_01_02_form_rdoSprvsnCoSmYn_innerdataset);
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("4");
            obj.set_text("주관사 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoNm","75","127","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("5");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20.00","84","305","86",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSprvsnCoNm\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00","974.00","151","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("7");
            obj.set_text("주관사 담당자명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoPicNm","607","140","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("8");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00","974.00","151","305","86",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSprvsnCoPicNm\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","100",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","420","115","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("11");
            obj.set_text("주관사 연락처");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Edit("edtSprvsnCoCtinfoNo","191","228","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("12");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","420.00","115","305","86",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtSprvsnCoCtinfoNo\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00","1007","201","305","1",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("14");
            obj.set_flexgrow("1");
            obj._setContents("");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","100",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00","20.00","350","335","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("16");
            obj.set_text("주관사 관리책임자(부)의 개인정보수집및 이용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            obj.set_flexgrow("0");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Button("Button00_00","319.00","242","138","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("17");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","365","350","400","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("18");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","20","242","100%","46",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("10");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Static("Static00_00","83","444","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("20");
            obj.set_text("JPG,JPEG,GIF,PNG,BMP,PDF만 첨부가능(단, PDF는 1장만 첨부가능)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","20.00","242","980","150",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("pan04_00","0","242","100.00%","150",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("22");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00\"/></Contents>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Grid("Grid00","138","460","100%","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("25");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"120\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"파일선택\" cssclass=\"CellFileUp\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\" cssclass=\"CellFileDel\"/></Band></Format></Formats>");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Button("Button01_00","760","371","120","40",null,null,null,null,null,null,this.div00_01_02.form);
            obj.set_taborder("24");
            obj.set_text("동의서보관함");
            obj.set_fittocontents("width");
            obj.set_flexshrink("0");
            obj.set_cssclass("btn_WF_Small");
            this.div00_01_02.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","26","694","100%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("7");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("신청정보 (시공사)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","628","0","191","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"btnFold2\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","102","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnFold2","146","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Div("div00_01_02_00","414","730","100%","500",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","11","48","100%","40",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("3");
            obj.set_text("■ 시공사 : 실제 공사/작업을 시행하는 회사");
            obj.set_cssclass("sta_WF_Des004");
            obj.set_fittocontents("height");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","100",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("1");
            obj.set_text("시공사의 동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","84","305","86",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoCnstrSmYn\"/></Contents>");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Radio("rdoCnstrSmYn","137","143","100%","40",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("23");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div00_01_02_00_form_rdoCnstrSmYn_innerdataset = new nexacro.NormalDataset("div00_01_02_00_form_rdoCnstrSmYn_innerdataset", obj);
            div00_01_02_00_form_rdoCnstrSmYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">신청자정보와동일</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">신청자정보와동일하지않음</Col></Row></Rows>");
            obj.set_innerdataset(div00_01_02_00_form_rdoCnstrSmYn_innerdataset);
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00","10","98","100%","46",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("4");
            obj.set_text("시공사 회사명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Edit("edtCnstrCoNm","75","127","100%","40",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("5");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","20.00","84","305","86",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCnstrCoNm\"/></Contents>");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00_00","974.00","151","100%","46",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("7");
            obj.set_text("시공사 담당자명");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Edit("edtCnstrPicNm","607","140","100%","40",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("8");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00","974.00","151","305","86",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCnstrPicNm\"/></Contents>");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Panel("pan00_00","0","60","100.00%","100",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan06_00_00\"/></Contents>");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Static("staLabel00_00_00","420","115","100%","46",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("11");
            obj.set_text("시공사 연락처");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Edit("edtCnstrCtinfoNo","191","228","100%","40",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("12");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","420.00","115","305","86",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtCnstrCtinfoNo\"/></Contents>");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Panel("Panel00","1007","201","305","1",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("14");
            obj.set_flexgrow("1");
            obj._setContents("");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","100",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/></Contents>");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00","20.00","242","305","46",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("16");
            obj.set_text("시공사의 개인정보수집 및 이용동의서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            obj.set_flexgrow("0");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","319.00","242","138","40",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("17");
            obj.set_text("동의서 양식 다운로드");
            obj.set_cssclass("btn_WF_Small");
            obj.set_fittocontents("width");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","319","242","400","46",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("18");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_01","20","242","100%","46",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("19");
            obj.set_horizontalgap("10");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","83","444","100%","40",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("20");
            obj.set_text("JPG,JPEG,GIF,PNG,BMP,PDF만 첨부가능(단, PDF는 1장만 첨부가능)");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","20.00","242","980","150",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Grid00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static00_00\"/></Contents>");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Grid("Grid00","230","471","100%","40",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("25");
            obj.set_cssclass("grd_WF_FileAdd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"120\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:fullName\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"파일선택\" cssclass=\"CellFileUp\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\" cssclass=\"CellFileDel\"/></Band></Format></Formats>");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00","0","242","100.00%","150",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("22");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00\"/></Contents>");
            this.div00_01_02_00.addChild(obj.name, obj);

            obj = new Button("Button01_00","750","372","120","40",null,null,null,null,null,null,this.div00_01_02_00.form);
            obj.set_taborder("24");
            obj.set_text("동의서보관함");
            obj.set_fittocontents("width");
            obj.set_flexshrink("0");
            obj.set_cssclass("btn_WF_Small");
            this.div00_01_02_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00_01_02.form
            obj = new Layout("default","",0,0,this.div00_01_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("3");
                p.Static00.set_text("■ 주관사 : 공사/작업을 발주, 의뢰하는 회사 혹은 공항공사 내 담당부서");
                p.Static00.set_cssclass("sta_WF_Des004");
                p.Static00.set_fittocontents("height");
                p.Static00.move("11","48","100%","40",null,null);

                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","100",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("주관사의 동일여부");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_verticalgap("4");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("20.00","84","305","86",null,null);

                p.rdoSprvsnCoSmYn.set_taborder("23");
                p.rdoSprvsnCoSmYn.set_innerdataset(div00_01_02_form_rdoSprvsnCoSmYn_innerdataset);
                p.rdoSprvsnCoSmYn.set_codecolumn("codecolumn");
                p.rdoSprvsnCoSmYn.set_datacolumn("datacolumn");
                p.rdoSprvsnCoSmYn.set_direction("vertical");
                p.rdoSprvsnCoSmYn.set_fittocontents("none");
                p.rdoSprvsnCoSmYn.set_columncount("-1");
                p.rdoSprvsnCoSmYn.set_rowcount("-1");
                p.rdoSprvsnCoSmYn.move("137","143","100%","40",null,null);

                p.staLabel00_00.set_taborder("4");
                p.staLabel00_00.set_text("주관사 회사명");
                p.staLabel00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.edtSprvsnCoNm.set_taborder("5");
                p.edtSprvsnCoNm.move("75","127","100%","40",null,null);

                p.Panel00_00_00.set_taborder("6");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_verticalgap("4");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("20.00","84","305","86",null,null);

                p.staLabel03_00_00_00_00.set_taborder("7");
                p.staLabel03_00_00_00_00.set_text("주관사 담당자명");
                p.staLabel03_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_00.move("974.00","151","100%","46",null,null);

                p.edtSprvsnCoPicNm.set_taborder("8");
                p.edtSprvsnCoPicNm.move("607","140","100%","40",null,null);

                p.pan06_00_00.set_taborder("9");
                p.pan06_00_00.set_type("vertical");
                p.pan06_00_00.set_flexgrow("1");
                p.pan06_00_00.set_fittocontents("height");
                p.pan06_00_00.set_verticalgap("4");
                p.pan06_00_00.move("974.00","151","305","86",null,null);

                p.pan00_00.set_taborder("10");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("0","60","100.00%","100",null,null);

                p.staLabel00_00_00.set_taborder("11");
                p.staLabel00_00_00.set_text("주관사 연락처");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_00.move("420","115","100%","46",null,null);

                p.edtSprvsnCoCtinfoNo.set_taborder("12");
                p.edtSprvsnCoCtinfoNo.move("191","228","100%","40",null,null);

                p.Panel00_00_00_00.set_taborder("13");
                p.Panel00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00.move("420.00","115","305","86",null,null);

                p.Panel00.set_taborder("14");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("1007","201","305","1",null,null);

                p.pan02.set_taborder("15");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","242","100.00%","100",null,null);

                p.staLabel03_00_01_00.set_taborder("16");
                p.staLabel03_00_01_00.set_text("주관사 관리책임자(부)의 개인정보수집및 이용동의서");
                p.staLabel03_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01_00.set_fittocontents("width");
                p.staLabel03_00_01_00.set_flexgrow("0");
                p.staLabel03_00_01_00.move("20.00","350","335","46",null,null);

                p.Button00_00.set_taborder("17");
                p.Button00_00.set_text("동의서 양식 다운로드");
                p.Button00_00.set_cssclass("btn_WF_Small");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("319.00","242","138","40",null,null);

                p.Panel01_00.set_taborder("18");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.move("365","350","400","46",null,null);

                p.Panel00_00_01.set_taborder("19");
                p.Panel00_00_01.set_horizontalgap("10");
                p.Panel00_00_01.set_tabletemplate("1* / 1* 1*");
                p.Panel00_00_01.set_flexwrap("wrap");
                p.Panel00_00_01.set_fittocontents("height");
                p.Panel00_00_01.set_cssclass("pan_WF_FileTitle");
                p.Panel00_00_01.move("20","242","100%","46",null,null);

                p.Static00_00.set_taborder("20");
                p.Static00_00.set_text("JPG,JPEG,GIF,PNG,BMP,PDF만 첨부가능(단, PDF는 1장만 첨부가능)");
                p.Static00_00.set_cssclass("sta_WF_Des");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.move("83","444","100%","40",null,null);

                p.Panel02_00_00_00.set_taborder("21");
                p.Panel02_00_00_00.set_type("vertical");
                p.Panel02_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00.set_verticalgap("4");
                p.Panel02_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00.move("20.00","242","980","150",null,null);

                p.pan04_00.set_taborder("22");
                p.pan04_00.set_horizontalgap("20");
                p.pan04_00.set_flexcrossaxiswrapalign("start");
                p.pan04_00.set_flexwrap("wrap");
                p.pan04_00.set_fittocontents("height");
                p.pan04_00.set_spacing("10px 20px 10px 20px");
                p.pan04_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_00.set_verticalgap("0");
                p.pan04_00.move("0","242","100.00%","150",null,null);

                p.Grid00.set_taborder("25");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("138","460","100%","40",null,null);

                p.Button01_00.set_taborder("24");
                p.Button01_00.set_text("동의서보관함");
                p.Button01_00.set_fittocontents("width");
                p.Button01_00.set_flexshrink("0");
                p.Button01_00.set_cssclass("btn_WF_Small");
                p.Button01_00.move("760","371","120","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_01_02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_02.form
            obj = new Layout("Layout0","",0,0,this.div00_01_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.rdoSprvsnCoSmYn.move("137","143","100%","40",null,null);

                p.Panel00_00.move("20.00","84","440","90",null,null);

                p.pan00.move("0","40","100.00%","101",null,null);

                p.pan00_00.move("0","60","100.00%","183",null,null);

                p.pan02.move("0","242","100.00%","98",null,null);

                p.Panel02_00_00_00.move("20.00","242","91.67%","180",null,null);

                p.Panel00.move("1007","201","440","0",null,null);

                p.pan04_00.move("0","422","100.00%","201",null,null);

                p.Panel00_00_01.move("20","242","100%","92",null,null);

                p.Panel01_00.set_flexwrap("wrap");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.set_verticalgap("10");
            	}
            );
            obj.set_type("vertical");
            this.div00_01_02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00_01_02_00.form
            obj = new Layout("default","",0,0,this.div00_01_02_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("3");
                p.Static00.set_text("■ 시공사 : 실제 공사/작업을 시행하는 회사");
                p.Static00.set_cssclass("sta_WF_Des004");
                p.Static00.set_fittocontents("height");
                p.Static00.move("11","48","100%","40",null,null);

                p.pan00.set_taborder("0");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("0","60","100.00%","100",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("시공사의 동일여부");
                p.staLabel00.set_cssclass("sta_WF_Label_E");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_verticalgap("4");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("20.00","84","305","86",null,null);

                p.rdoCnstrSmYn.set_taborder("23");
                p.rdoCnstrSmYn.set_innerdataset(div00_01_02_00_form_rdoCnstrSmYn_innerdataset);
                p.rdoCnstrSmYn.set_codecolumn("codecolumn");
                p.rdoCnstrSmYn.set_datacolumn("datacolumn");
                p.rdoCnstrSmYn.set_direction("vertical");
                p.rdoCnstrSmYn.set_fittocontents("none");
                p.rdoCnstrSmYn.set_columncount("-1");
                p.rdoCnstrSmYn.set_rowcount("-1");
                p.rdoCnstrSmYn.move("137","143","100%","40",null,null);

                p.staLabel00_00.set_taborder("4");
                p.staLabel00_00.set_text("시공사 회사명");
                p.staLabel00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00.move("10","98","100%","46",null,null);

                p.edtCnstrCoNm.set_taborder("5");
                p.edtCnstrCoNm.move("75","127","100%","40",null,null);

                p.Panel00_00_00.set_taborder("6");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_flexgrow("1");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.set_verticalgap("4");
                p.Panel00_00_00.set_minwidth("");
                p.Panel00_00_00.move("20.00","84","305","86",null,null);

                p.staLabel03_00_00_00_00.set_taborder("7");
                p.staLabel03_00_00_00_00.set_text("시공사 담당자명");
                p.staLabel03_00_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00_00.move("974.00","151","100%","46",null,null);

                p.edtCnstrPicNm.set_taborder("8");
                p.edtCnstrPicNm.move("607","140","100%","40",null,null);

                p.pan06_00_00.set_taborder("9");
                p.pan06_00_00.set_type("vertical");
                p.pan06_00_00.set_flexgrow("1");
                p.pan06_00_00.set_fittocontents("height");
                p.pan06_00_00.set_verticalgap("4");
                p.pan06_00_00.move("974.00","151","305","86",null,null);

                p.pan00_00.set_taborder("10");
                p.pan00_00.set_horizontalgap("20");
                p.pan00_00.set_flexcrossaxiswrapalign("start");
                p.pan00_00.set_flexwrap("wrap");
                p.pan00_00.set_fittocontents("height");
                p.pan00_00.set_verticalgap("0");
                p.pan00_00.set_spacing("0px 20px 10px 20px");
                p.pan00_00.set_cssclass("pal_WF_DtlBg");
                p.pan00_00.move("0","60","100.00%","100",null,null);

                p.staLabel00_00_00.set_taborder("11");
                p.staLabel00_00_00.set_text("시공사 연락처");
                p.staLabel00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel00_00_00.move("420","115","100%","46",null,null);

                p.edtCnstrCtinfoNo.set_taborder("12");
                p.edtCnstrCtinfoNo.move("191","228","100%","40",null,null);

                p.Panel00_00_00_00.set_taborder("13");
                p.Panel00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00.set_flexgrow("1");
                p.Panel00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00.set_minwidth("");
                p.Panel00_00_00_00.move("420.00","115","305","86",null,null);

                p.Panel00.set_taborder("14");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("1007","201","305","1",null,null);

                p.pan02.set_taborder("15");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","242","100.00%","100",null,null);

                p.staLabel03_00_01_00.set_taborder("16");
                p.staLabel03_00_01_00.set_text("시공사의 개인정보수집 및 이용동의서");
                p.staLabel03_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01_00.set_fittocontents("width");
                p.staLabel03_00_01_00.set_flexgrow("0");
                p.staLabel03_00_01_00.move("20.00","242","305","46",null,null);

                p.Button00_00.set_taborder("17");
                p.Button00_00.set_text("동의서 양식 다운로드");
                p.Button00_00.set_cssclass("btn_WF_Small");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("319.00","242","138","40",null,null);

                p.Panel01_00.set_taborder("18");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.move("319","242","400","46",null,null);

                p.Panel00_00_01.set_taborder("19");
                p.Panel00_00_01.set_horizontalgap("10");
                p.Panel00_00_01.set_tabletemplate("1* / 1* 1*");
                p.Panel00_00_01.set_flexwrap("wrap");
                p.Panel00_00_01.set_fittocontents("height");
                p.Panel00_00_01.set_cssclass("pan_WF_FileTitle");
                p.Panel00_00_01.move("20","242","100%","46",null,null);

                p.Static00_00.set_taborder("20");
                p.Static00_00.set_text("JPG,JPEG,GIF,PNG,BMP,PDF만 첨부가능(단, PDF는 1장만 첨부가능)");
                p.Static00_00.set_cssclass("sta_WF_Des");
                p.Static00_00.set_fittocontents("height");
                p.Static00_00.move("83","444","100%","40",null,null);

                p.Panel02_00_00_00.set_taborder("21");
                p.Panel02_00_00_00.set_type("vertical");
                p.Panel02_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00.set_verticalgap("4");
                p.Panel02_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00.move("20.00","242","980","150",null,null);

                p.Grid00.set_taborder("25");
                p.Grid00.set_cssclass("grd_WF_FileAdd");
                p.Grid00.move("230","471","100%","40",null,null);

                p.pan04_00.set_taborder("22");
                p.pan04_00.set_horizontalgap("20");
                p.pan04_00.set_flexcrossaxiswrapalign("start");
                p.pan04_00.set_flexwrap("wrap");
                p.pan04_00.set_fittocontents("height");
                p.pan04_00.set_spacing("10px 20px 10px 20px");
                p.pan04_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_00.set_verticalgap("0");
                p.pan04_00.move("0","242","100.00%","150",null,null);

                p.Button01_00.set_taborder("24");
                p.Button01_00.set_text("동의서보관함");
                p.Button01_00.set_fittocontents("width");
                p.Button01_00.set_flexshrink("0");
                p.Button01_00.set_cssclass("btn_WF_Small");
                p.Button01_00.move("750","372","120","40",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_01_02_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_01_02_00.form
            obj = new Layout("Layout0","",0,0,this.div00_01_02_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan00.move("0","60","100.00%","121",null,null);

                p.Panel00_00.move("20.00","84","440","110",null,null);

                p.rdoCnstrSmYn.move("137","143","100%","40",null,null);

                p.pan00_00.move("0","60","100.00%","183",null,null);

                p.pan02.move("0","242","100.00%","98",null,null);

                p.pan04_00.move("0","242","100.00%","201",null,null);

                p.Panel02_00_00_00.move("20.00","10","100%","180",null,null);

                p.Panel00_00_01.move("20","242","100%","92",null,null);

                p.Panel01_00.set_flexwrap("wrap");
                p.Panel01_00.set_fittocontents("height");
                p.Panel01_00.set_verticalgap("10");
            	}
            );
            obj.set_type("vertical");
            this.div00_01_02_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,570,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("신청정보(통신실작업)");

                p.panForm.set_taborder("0");
                p.panForm.set_type("vertical");
                p.panForm.set_fittocontents("height");
                p.panForm.move("0","0",null,"1160","0",null);

                p.Panel02.set_taborder("1");
                p.Panel02.set_fittocontents("none");
                p.Panel02.set_flexcrossaxisalign("end");
                p.Panel02.set_minheight("70");
                p.Panel02.set_maxheight("");
                p.Panel02.move("1468","10","100%","70",null,null);

                p.staSubTitle.set_taborder("2");
                p.staSubTitle.set_text("신청정보 (주관사)");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100%","50",null,null);

                p.Panel01.set_taborder("3");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_spacing("0px 10px 0px 10px");
                p.Panel01.move("628","0","191","50",null,null);

                p.Button01.set_taborder("4");
                p.Button01.set_cssclass("btn_WF_ACPlus");
                p.Button01.set_visible("false");
                p.Button01.move("102","6","34","34",null,null);

                p.btnFold1.set_taborder("5");
                p.btnFold1.set_cssclass("btn_WF_ACMinus");
                p.btnFold1.move("146","6","34","34",null,null);

                p.div00_01_02.set_taborder("6");
                p.div00_01_02.set_text("신청자정보");
                p.div00_01_02.set_cssclass("div_WF_Bg");
                p.div00_01_02.set_fittocontents("height");
                p.div00_01_02.move("90","210","100%","500",null,null);

                p.Panel02_00.set_taborder("7");
                p.Panel02_00.set_fittocontents("none");
                p.Panel02_00.set_flexcrossaxisalign("end");
                p.Panel02_00.set_minheight("70");
                p.Panel02_00.set_maxheight("");
                p.Panel02_00.move("26","694","100%","70",null,null);

                p.staSubTitle00.set_taborder("8");
                p.staSubTitle00.set_text("신청정보 (시공사)");
                p.staSubTitle00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00.move("0","0","100%","50",null,null);

                p.Panel01_00.set_taborder("9");
                p.Panel01_00.set_spacing("0px 10px 0px 10px");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.set_flexcrossaxisalign("center");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01_00.move("628","0","191","50",null,null);

                p.Button00_00.set_taborder("10");
                p.Button00_00.set_cssclass("btn_WF_ACPlus");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("102","6","34","34",null,null);

                p.btnFold2.set_taborder("11");
                p.btnFold2.set_cssclass("btn_WF_ACMinus");
                p.btnFold2.move("146","6","34","34",null,null);

                p.div00_01_02_00.set_taborder("12");
                p.div00_01_02_00.set_text("신청자정보");
                p.div00_01_02_00.set_cssclass("div_WF_Bg");
                p.div00_01_02_00.set_fittocontents("height");
                p.div00_01_02_00.move("414","730","100%","500",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,570,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panForm.set_spacing("0px 20px 10px 20px");
                p.panForm.move("0","0","100%","5000",null,null);

                p.div00_01_02.move("90","210","100.00%","623",null,null);

                p.div00_01_02_00.move("414","730","100.00%","643",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div00_01_02.form.rdoSprvsnCoSmYn","value","dsCmnctIncmgJobWtpl","sprvsnCoSmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div00_01_02.form.edtSprvsnCoNm","value","dsCmnctIncmgJobWtpl","sprvsnCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00_01_02.form.edtSprvsnCoPicNm","value","dsCmnctIncmgJobWtpl","sprvsnCoPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div00_01_02.form.edtSprvsnCoCtinfoNo","value","dsCmnctIncmgJobWtpl","sprvsnCoCtinfoNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div00_01_02_00.form.rdoCnstrSmYn","value","dsCmnctIncmgJobWtpl","cnstrSmYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div00_01_02_00.form.edtCnstrCoNm","value","dsCmnctIncmgJobWtpl","cnstrCoNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div00_01_02_00.form.edtCnstrPicNm","value","dsCmnctIncmgJobWtpl","cnstrPicNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div00_01_02_00.form.edtCnstrCtinfoNo","value","dsCmnctIncmgJobWtpl","cnstrCtinfoNo");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CST015M02.xfdl", function() {
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
         * @name : btnFold1_onclick
         * @description : 신청정보(주관사) 접기/펴기
         ***************************************************************************/
        this.btnFold1_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div00_01_02.visible = true;
        	} else {
        		this.div00_01_02.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.div00_01_02.form.resetScroll();
        };

        /**************************************************************************
         * @name : btnFold1_onclick
         * @description : 신청정보(시공사) 접기/펴기
         ***************************************************************************/
        this.btnFold2_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div00_01_02_00.visible = true;
        	} else {
        		this.div00_01_02_00.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.div00_01_02_00.form.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnFold1.addEventHandler("onclick",this.btnFold1_onclick,this);
            this.btnFold2.addEventHandler("onclick",this.btnFold2_onclick,this);
        };
        this.loadIncludeScript("CST015M02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
