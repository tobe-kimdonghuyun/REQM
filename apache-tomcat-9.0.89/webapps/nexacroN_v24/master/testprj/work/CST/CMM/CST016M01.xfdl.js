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
            this.set_titletext("신청자정보(전산질작업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Panel("Panel01","0","0","100.00%","605",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"div00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","0","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
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

            obj = new Panel("Panel00","819","0","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","1380","0","100.00%","70",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div00","66","131","100.00%","535",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel00","0","0","66.22%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtAplySeCdNm","0","46","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20.00","0","100%","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplySeCdNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan00","236","622","100.00%","97",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","0","0","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("신청자 / 감독자 동일여부");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoAplcntHwrtInptYn","0","46","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_fittocontents("none");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_readonly("false");
            var div00_form_rdoAplcntHwrtInptYn_innerdataset = new nexacro.NormalDataset("div00_form_rdoAplcntHwrtInptYn_innerdataset", obj);
            div00_form_rdoAplcntHwrtInptYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">신청자와감독자동일</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">신청자와감독자동일하지않음</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdoAplcntHwrtInptYn_innerdataset);
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","0","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"rdoAplcntHwrtInptYn\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan02","236","719","100.00%","97",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","0","0","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtRgtrNm","0","46","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00","30.00","10","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRgtrNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01","10.00","10","32.43%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtRgtrCoNm","10.00","56","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","520.00","0","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRgtrCoNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06","236","816","100.00%","97",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00_00_00","0","0","32.43%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_text("작업감독자");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Div("Div00","0","46","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            obj.set_taborder("16");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtJobApvsrNm","0","0",null,"40","0",null,null,null,null,null,this.div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_EdtSch");
            this.div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("btnPop","edtJobApvsrNm:-40","0","40","40",null,null,null,null,null,null,this.div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.div00.form.Div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00_00_00","30.00","10","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Div00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01_00_00_00","10.00","10","32.43%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_text("작업감독자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtJobApvsrCoNm","10.00","56","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00_00_00_00","530.00","10","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtJobApvsrCoNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06_00_00_00","236","913","100.00%","97",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01_00_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_00","0","0","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtTelno","0","0","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","0","44","100%","41",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00_00","0","46","100%","85",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtTelno\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_01","20.00","0","300","136",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("panBlank00","530.00","10","300","1",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("27");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents/>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan03_00","236","1010","100.00%","147",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("28");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank00\"/></Contents>");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form.Div00.form
            obj = new Layout("default","",0,0,this.div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtJobApvsrNm.set_taborder("0");
                p.edtJobApvsrNm.set_cssclass("edt_WF_EdtSch");
                p.edtJobApvsrNm.move("0","0",null,"40","0",null);

                p.btnPop.set_taborder("1");
                p.btnPop.set_cssclass("btn_WF_EdtSch");
                p.btnPop.move("edtJobApvsrNm:-40","0","40","40",null,null);
            	}
            );
            this.div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div00.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel00.set_taborder("0");
                p.staLabel00.set_text("신청구분");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("0","0","66.22%","46",null,null);

                p.edtAplySeCdNm.set_taborder("1");
                p.edtAplySeCdNm.set_readonly("true");
                p.edtAplySeCdNm.move("0","46","100%","40",null,null);

                p.Panel00_00.set_taborder("2");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("20.00","0","100%","86",null,null);

                p.pan00.set_taborder("3");
                p.pan00.set_horizontalgap("20");
                p.pan00.set_flexcrossaxiswrapalign("start");
                p.pan00.set_flexwrap("wrap");
                p.pan00.set_fittocontents("height");
                p.pan00.set_verticalgap("0");
                p.pan00.set_spacing("0px 20px 10px 20px");
                p.pan00.set_cssclass("pal_WF_DtlBg");
                p.pan00.move("236","622","100.00%","97",null,null);

                p.staLabel03_00.set_taborder("4");
                p.staLabel03_00.set_text("신청자 / 감독자 동일여부");
                p.staLabel03_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00.move("0","0","100%","46",null,null);

                p.rdoAplcntHwrtInptYn.set_taborder("5");
                p.rdoAplcntHwrtInptYn.set_fittocontents("none");
                p.rdoAplcntHwrtInptYn.set_innerdataset(div00_form_rdoAplcntHwrtInptYn_innerdataset);
                p.rdoAplcntHwrtInptYn.set_codecolumn("codecolumn");
                p.rdoAplcntHwrtInptYn.set_datacolumn("datacolumn");
                p.rdoAplcntHwrtInptYn.set_direction("horizontal");
                p.rdoAplcntHwrtInptYn.set_columncount("-1");
                p.rdoAplcntHwrtInptYn.set_rowcount("-1");
                p.rdoAplcntHwrtInptYn.set_readonly("false");
                p.rdoAplcntHwrtInptYn.set_value("");
                p.rdoAplcntHwrtInptYn.set_index("0");
                p.rdoAplcntHwrtInptYn.move("0","46","100%","40",null,null);

                p.Panel02_00.set_taborder("6");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.move("20.00","0","300","86",null,null);

                p.pan02.set_taborder("7");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("236","719","100.00%","97",null,null);

                p.staLabel03_00_00_01.set_taborder("8");
                p.staLabel03_00_00_01.set_text("신청자");
                p.staLabel03_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01.move("0","0","100%","46",null,null);

                p.edtRgtrNm.set_taborder("9");
                p.edtRgtrNm.set_readonly("false");
                p.edtRgtrNm.move("0","46","100%","40",null,null);

                p.pan_04_00_00.set_taborder("10");
                p.pan_04_00_00.set_type("vertical");
                p.pan_04_00_00.set_flexgrow("1");
                p.pan_04_00_00.move("30.00","10","300","86",null,null);

                p.staLabel03_01_00_01.set_taborder("11");
                p.staLabel03_01_00_01.set_text("신청자 회사명");
                p.staLabel03_01_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00_01.move("10.00","10","32.43%","46",null,null);

                p.edtRgtrCoNm.set_taborder("12");
                p.edtRgtrCoNm.set_readonly("true");
                p.edtRgtrCoNm.move("10.00","56","100%","40",null,null);

                p.pan04_01_00.set_taborder("13");
                p.pan04_01_00.set_type("vertical");
                p.pan04_01_00.set_flexgrow("1");
                p.pan04_01_00.move("520.00","0","300","86",null,null);

                p.pan06.set_taborder("14");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.move("236","816","100.00%","97",null,null);

                p.staLabel03_00_00_01_00_00_00.set_taborder("15");
                p.staLabel03_00_00_01_00_00_00.set_text("작업감독자");
                p.staLabel03_00_00_01_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_01_00_00_00.move("0","0","32.43%","46",null,null);

                p.Div00.set_text("Div00");
                p.Div00.set_formscrollbartype("none none");
                p.Div00.set_formscrolltype("none");
                p.Div00.set_flexgrow("1");
                p.Div00.set_taborder("16");
                p.Div00.move("0","46","100%","40",null,null);

                p.pan_04_00_00_00_00_00.set_taborder("17");
                p.pan_04_00_00_00_00_00.set_type("vertical");
                p.pan_04_00_00_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00_00_00.move("30.00","10","300","86",null,null);

                p.staLabel03_01_00_01_00_00_00.set_taborder("18");
                p.staLabel03_01_00_01_00_00_00.set_text("작업감독자 회사명");
                p.staLabel03_01_00_01_00_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00_01_00_00_00.move("10.00","10","32.43%","46",null,null);

                p.edtJobApvsrCoNm.set_taborder("19");
                p.edtJobApvsrCoNm.set_readonly("true");
                p.edtJobApvsrCoNm.move("10.00","56","100%","40",null,null);

                p.pan04_01_00_00_00_00.set_taborder("20");
                p.pan04_01_00_00_00_00.set_type("vertical");
                p.pan04_01_00_00_00_00.set_flexgrow("1");
                p.pan04_01_00_00_00_00.move("530.00","10","300","86",null,null);

                p.pan06_00_00_00.set_taborder("21");
                p.pan06_00_00_00.set_horizontalgap("20");
                p.pan06_00_00_00.set_flexcrossaxiswrapalign("start");
                p.pan06_00_00_00.set_flexwrap("wrap");
                p.pan06_00_00_00.set_fittocontents("height");
                p.pan06_00_00_00.set_verticalgap("0");
                p.pan06_00_00_00.set_spacing("0px 20px 10px 20px");
                p.pan06_00_00_00.set_cssclass("pal_WF_DtlBg");
                p.pan06_00_00_00.move("236","913","100.00%","97",null,null);

                p.staLabel03_00_00_00.set_taborder("22");
                p.staLabel03_00_00_00.set_text("휴대폰번호");
                p.staLabel03_00_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00_00.move("0","0","100%","46",null,null);

                p.edtTelno.set_taborder("23");
                p.edtTelno.set_readonly("true");
                p.edtTelno.move("0","0","100%","40",null,null);

                p.sta00_00_00_00_00.set_taborder("24");
                p.sta00_00_00_00_00.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
                p.sta00_00_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_00_00.set_fittocontents("height");
                p.sta00_00_00_00_00.set_flexgrow("1");
                p.sta00_00_00_00_00.move("0","44","100%","41",null,null);

                p.Panel01_00_00.set_taborder("25");
                p.Panel01_00_00.set_type("vertical");
                p.Panel01_00_00.set_verticalgap("4");
                p.Panel01_00_00.set_fittocontents("height");
                p.Panel01_00_00.move("0","46","100%","85",null,null);

                p.pan_04_00_01.set_taborder("26");
                p.pan_04_00_01.set_type("vertical");
                p.pan_04_00_01.set_flexgrow("1");
                p.pan_04_00_01.set_fittocontents("height");
                p.pan_04_00_01.move("20.00","0","300","136",null,null);

                p.panBlank00.set_taborder("27");
                p.panBlank00.set_type("vertical");
                p.panBlank00.set_flexgrow("1");
                p.panBlank00.set_fittocontents("height");
                p.panBlank00.move("530.00","10","300","1",null,null);

                p.pan03_00.set_taborder("28");
                p.pan03_00.set_horizontalgap("20");
                p.pan03_00.set_flexcrossaxiswrapalign("start");
                p.pan03_00.set_flexwrap("wrap");
                p.pan03_00.set_fittocontents("height");
                p.pan03_00.set_verticalgap("0");
                p.pan03_00.set_spacing("0px 20px 10px 20px");
                p.pan03_00.set_cssclass("pal_WF_DtlBg");
                p.pan03_00.move("236","1010","100.00%","147",null,null);
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
                p.pan02.move("236","719","100.00%","117",null,null);

                p.Panel02_00.move("20.00","0","100%","106",null,null);

                p.rdoAplcntHwrtInptYn.move("0","46","100%","60",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,570,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("신청자정보(전산질작업)");

                p.Panel01.set_taborder("5");
                p.Panel01.set_type("vertical");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("0","0","100.00%","605",null,null);

                p.staSubTitle.set_taborder("0");
                p.staSubTitle.set_text("신청자정보");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("0","0","100%","50",null,null);

                p.Button01.set_taborder("1");
                p.Button01.set_cssclass("btn_WF_ACPlus");
                p.Button01.set_visible("false");
                p.Button01.move("112.00","6","34","34",null,null);

                p.Button00.set_taborder("2");
                p.Button00.set_cssclass("btn_WF_ACMinus");
                p.Button00.move("156.00","6","34","34",null,null);

                p.Panel00.set_taborder("3");
                p.Panel00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_spacing("0px 10px 0px 10px");
                p.Panel00.move("819","0","200","50",null,null);

                p.Panel01_00.set_taborder("4");
                p.Panel01_00.set_flexcrossaxisalign("end");
                p.Panel01_00.move("1380","0","100.00%","70",null,null);

                p.div00.set_taborder("6");
                p.div00.set_text("div00");
                p.div00.set_fittocontents("height");
                p.div00.move("66","131","100.00%","535",null,null);
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
                p.staSubTitle.move("0","0","100%","50",null,null);

                p.Panel01.set_spacing("0px 20px 10px 20px");
                p.Panel01.move("0","0","100.00%","635",null,null);

                p.div00.move("66","131","100%","555",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div00.form.rdoAplcntHwrtInptYn","value","dsFcltOperMst","aplcntHwrtInptYn");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div00.form.edtRgtrNm","value","dsFcltOperMst","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00.form.edtTelno","value","dsFcltOperMst","mblTelno");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div00.form.Div00.form.edtJobApvsrNm","value","dsCmproMst","jobApvsrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div00.form.edtRgtrCoNm","value","dsFcltOperMst","aplcntInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div00.form.edtJobApvsrCoNm","value","dsCmproMst","jobApvsrCoNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST016M01.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST016M01.xfdl", function() {
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
        this.executeIncludeScript("xjs::TaskCom.xjs"); /*include "xjs::TaskCom.xjs"*/;  // 업무공통

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	//this.divForm.form.divSch.set_width("100%");
        	//this.divForm.form.divSch.fittocontents = "height";
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
        /**************************************************************************
         * @name : fnPopupCallback
         * @description : 팝업에 관한 콜백 함수
         ***************************************************************************/
        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	// 담당자 찾기
        	if (sPopupId == "plcSch") {

        		if (this.gfnIsNull(sRtn)) return;

        		var objRtn 		= JSON.parse(sRtn);
        		var sUserId 	= objRtn.rUserId;
        		var sUserNm 	= objRtn.rUserNm;

        		this.dsCmproMst = this.lookup("dsCmproMst");
        		this.dsCmproMst.setColumn(0, "jobApvsrId", sUserId);
        		this.dsCmproMst.setColumn(0, "jobApvsrNm", sUserNm);
        		//this.dsCmproMst.setColumn(0, "jobApvsrCoNm", sUserNm); 회사

        		/*
        		if (!this.gfnIsNull(sUserId)) {
        			for(i = 0; i < this.dsWfEmps.rowcount; i++) {
        				var vDsUserId = this.dsWfEmps.getColumn(i, "wfeEmpId");
        				if(vDsUserId == sUserId) {
        					this.divFrom01.form.div00.form.divEdtPop01.form.mtiArptPicId.setSelect(i,true);
        					return;
        				}
        			}

        			nRow = this.dsWfEmps.addRow();
        			this.dsWfEmps.setColumn(nRow, "wfeEmpId" , sUserId);
        			this.dsWfEmps.setColumn(nRow, "wfeEmpNm" , sUserNm);
        			this.dsWfEmps.setColumn(nRow, "wfeSrcEntId" , "CAD");
        			this.dsWfEmps.setColumn(nRow, "wfeJobCd" , "TAS10373");

        			this.divFrom01.form.div00.form.divEdtPop01.form.mtiArptPicId.setSelect(nRow,true);
        		}
        		*/
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/





        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        /**************************************************************************
         * @name : Div00_btnPop_onclick
         * @description : 작업감독자 조회
         ***************************************************************************/
        this.btnPop_onclick = function(obj,e)
        {
        	var sTitle = "담당자찾기";
        	//파라미터 확인필요
        	var objArg   = {
        		"gubun" : "CMM"
        	};

        	var objOption = {
        		popuptype  : "modal"	//modal,modaless
        		, autosize : true
        		, title    : sTitle
        		, resize   : true
        		, titlebar : true
        	};
        	var sPopupCallBack = "fnPopupCallback";

        	//작업감독자 찾기 팝업(팝업url 수정필요)
        	this.gfnOpenPopup("plcSch", "work::CST/COM/CST006P20.xfdl", objArg, sPopupCallBack, objOption);
        };

        //펼침,접힘 버튼
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

        //신청자,감독자 동일여부
        this.div00_rdoAplcntHwrtInptYn_onitemchanged = function(obj,e)
        {
        	this.parent.parent.fnChgBtn();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.div00.form.rdoAplcntHwrtInptYn.addEventHandler("onitemchanged",this.div00_rdoAplcntHwrtInptYn_onitemchanged,this);
            this.div00.form.Div00.form.btnPop.addEventHandler("onclick",this.btnPop_onclick,this);
        };
        this.loadIncludeScript("CST016M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
