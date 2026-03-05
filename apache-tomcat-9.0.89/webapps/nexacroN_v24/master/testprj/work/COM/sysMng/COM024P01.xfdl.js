(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM024P01");
            this.set_titletext("프로그램 등록/수정 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"prgrmId\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmNm\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmKornNm\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmExpln\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmTy\" type=\"STRING\" size=\"256\"/><Column id=\"prgrmPathNm\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegDt\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegId\" type=\"STRING\" size=\"256\"/><Column id=\"frstRegNm\" type=\"STRING\" size=\"256\"/><Column id=\"useCnt\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"useYn\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"cdTypeId\" type=\"STRING\" size=\"256\"/><Column id=\"cdId\" type=\"STRING\" size=\"256\"/><Column id=\"cdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","0","0","100.00%","504",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","0","100%","484",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("신청자정보");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_WF_Bg");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","970","270","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("프로그램유형");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","970.00","270","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Combo01_00_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("6");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00","20.00","288","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("7");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_02_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00","970","270","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("9");
            obj.set_text("프로그램한글명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_03_01_00","970","315","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("10");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01","970.00","270","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_03_01_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan03","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("12");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("13");
            obj.set_text("URL(UI경로)");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00","20.00","242","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"edt00_02_00_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01","970","270","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("15");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","970.00","270","305","86",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Radio00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan06","0","242","100.00%","96",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("18");
            obj.set_text("설명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00_00","20.00","242","100%","186",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"txa00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Panel("pan07","0","242","100.00%","196",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("20");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00_00\"/></Contents>");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","127","203","280","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("21");
            obj.set_fittocontents("width");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divForm_form_div00_form_Radio00_innerdataset = new nexacro.NormalDataset("divForm_form_div00_form_Radio00_innerdataset", obj);
            divForm_form_div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divForm_form_div00_form_Radio00_innerdataset);
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Combo("Combo01_00_00","521.00","200","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("22");
            obj.set_flexgrow("1");
            obj.set_innerdataset("dsCombo");
            obj.set_codecolumn("cdId");
            obj.set_datacolumn("cdNm");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02_00_00","20.00","288","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new TextArea("txa00","70.00","395","100%","158",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("24");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("0");
            obj.set_text("등록자명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Edit("edt00_02","20.00","288","100%","40",null,null,null,null,null,null,this.divForm.form.div00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.div00.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0",null,"100%","60",null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","457.00","30","100","40",null,null,null,null,null,null,this.divPopBtn.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Yes");
            this.divPopBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.div00.form
            obj = new Layout("default","",0,0,this.divForm.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel02_00.set_taborder("2");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.move("20.00","242","305","86",null,null);

                p.pan02.set_taborder("3");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","242","100.00%","96",null,null);

                p.staLabel03_01.set_taborder("4");
                p.staLabel03_01.set_text("프로그램유형");
                p.staLabel03_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01.move("970","270","100%","46",null,null);

                p.Panel02_01.set_taborder("5");
                p.Panel02_01.set_type("vertical");
                p.Panel02_01.set_flexgrow("1");
                p.Panel02_01.move("970.00","270","305","86",null,null);

                p.staLabel03_00_00.set_taborder("6");
                p.staLabel03_00_00.set_text("프로그램명");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00.move("10","98","100%","46",null,null);

                p.edt00_02_00.set_taborder("7");
                p.edt00_02_00.set_readonly("false");
                p.edt00_02_00.move("20.00","288","100%","40",null,null);

                p.pan_04_00.set_taborder("8");
                p.pan_04_00.set_type("vertical");
                p.pan_04_00.set_flexgrow("1");
                p.pan_04_00.move("20.00","242","305","86",null,null);

                p.staLabel03_01_00.set_taborder("9");
                p.staLabel03_01_00.set_text("프로그램한글명");
                p.staLabel03_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00.move("970","270","100%","46",null,null);

                p.edt00_03_01_00.set_taborder("10");
                p.edt00_03_01_00.set_readonly("false");
                p.edt00_03_01_00.move("970","315","100%","40",null,null);

                p.pan04_01.set_taborder("11");
                p.pan04_01.set_type("vertical");
                p.pan04_01.set_flexgrow("1");
                p.pan04_01.move("970.00","270","305","86",null,null);

                p.pan03.set_taborder("12");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_00_01.set_taborder("13");
                p.staLabel03_00_00_01.set_text("URL(UI경로)");
                p.staLabel03_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01.move("10","98","100%","46",null,null);

                p.pan_04_00_00.set_taborder("14");
                p.pan_04_00_00.set_type("vertical");
                p.pan_04_00_00.set_flexgrow("1");
                p.pan_04_00_00.move("20.00","242","305","86",null,null);

                p.staLabel03_01_00_01.set_taborder("15");
                p.staLabel03_01_00_01.set_text("사용여부");
                p.staLabel03_01_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00_01.move("970","270","100%","46",null,null);

                p.pan04_01_00.set_taborder("16");
                p.pan04_01_00.set_type("vertical");
                p.pan04_01_00.set_flexgrow("1");
                p.pan04_01_00.move("970.00","270","305","86",null,null);

                p.pan06.set_taborder("17");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.move("0","242","100.00%","96",null,null);

                p.staLabel03_00_00_01_00.set_taborder("18");
                p.staLabel03_00_00_01_00.set_text("설명");
                p.staLabel03_00_00_01_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01_00.move("10","98","100%","46",null,null);

                p.pan_04_00_00_00.set_taborder("19");
                p.pan_04_00_00_00.set_type("vertical");
                p.pan_04_00_00_00.set_flexgrow("1");
                p.pan_04_00_00_00.set_fittocontents("height");
                p.pan_04_00_00_00.move("20.00","242","100%","186",null,null);

                p.pan07.set_taborder("20");
                p.pan07.set_horizontalgap("20");
                p.pan07.set_flexcrossaxiswrapalign("start");
                p.pan07.set_flexwrap("wrap");
                p.pan07.set_fittocontents("height");
                p.pan07.set_verticalgap("0");
                p.pan07.set_spacing("0px 20px 10px 20px");
                p.pan07.set_cssclass("pal_WF_DtlBg");
                p.pan07.move("0","242","100.00%","196",null,null);

                p.Radio00.set_taborder("21");
                p.Radio00.set_fittocontents("width");
                p.Radio00.set_innerdataset(divForm_form_div00_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("vertical");
                p.Radio00.set_value("Y");
                p.Radio00.set_index("0");
                p.Radio00.move("127","203","280","40",null,null);

                p.Combo01_00_00.set_taborder("22");
                p.Combo01_00_00.set_flexgrow("1");
                p.Combo01_00_00.set_innerdataset("dsCombo");
                p.Combo01_00_00.set_codecolumn("cdId");
                p.Combo01_00_00.set_datacolumn("cdNm");
                p.Combo01_00_00.set_text("선택");
                p.Combo01_00_00.set_value("");
                p.Combo01_00_00.set_index("-1");
                p.Combo01_00_00.move("521.00","200","100%","40",null,null);

                p.edt00_02_00_00.set_taborder("23");
                p.edt00_02_00_00.set_readonly("false");
                p.edt00_02_00_00.move("20.00","288","100%","40",null,null);

                p.txa00.set_taborder("24");
                p.txa00.move("70.00","395","100%","158",null,null);

                p.staLabel03_00.set_taborder("0");
                p.staLabel03_00.set_text("등록자명");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.edt00_02.set_taborder("1");
                p.edt00_02.set_readonly("true");
                p.edt00_02.move("20.00","288","100%","40",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.div00.form
            obj = new Layout("mobile","",0,0,this.divForm.form.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan02.move("0","242","100.00%","183",null,null);

                p.Panel02_01.move("970.00","270","400","86",null,null);

                p.pan03.move("0","242","100.00%","183",null,null);

                p.pan_04_00.move("20.00","242","400","86",null,null);

                p.pan04_01.move("970.00","270","400","86",null,null);

                p.pan06.move("0","242","100.00%","183",null,null);

                p.pan_04_00_00.move("20.00","242","400","86",null,null);

                p.pan04_01_00.move("970.00","270","400","86",null,null);

                p.pan07.move("0","242","100.00%","197",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            this.divForm.form.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.div00.set_taborder("0");
                p.div00.set_text("신청자정보");
                p.div00.set_fittocontents("height");
                p.div00.set_cssclass("div_WF_Bg");
                p.div00.move("0","0","100%","484",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.div00.move("0","0","100%","746",null,null);
            	}
            );
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPopBtn.form
            obj = new Layout("default","",0,0,this.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("1");
                p.Button00_00.set_text("확인");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.move("457.00","30","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("20");
            this.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divPopBtn.form,
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
            this.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",800,630,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("프로그램 등록/수정 관리");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_formscrollbartype("none none");
                p.divForm.set_formscrolltype("none");
                p.divForm.set_fittocontents("height");
                p.divForm.move("0","0","100.00%","504",null,null);

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0",null,"100%","60",null,"0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","Phone_screen",480,560,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("0","0","100.00%","756",null,null);

                p.divPopBtn.move("0","divForm:0","100.00%","60",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.div00.form.edt00_02","value","dsGet","frstRegNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.div00.form.Combo01_00_00","value","dsGet","prgrmTy");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.div00.form.edt00_02_00","value","dsGet","prgrmNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divForm.form.div00.form.edt00_03_01_00","value","dsGet","prgrmKornNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divForm.form.div00.form.edt00_02_00_00","value","dsGet","prgrmPathNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divForm.form.div00.form.txa00","value","dsGet","prgrmExpln");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divForm.form.div00.form.Radio00","value","dsGet","useYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM024P01.xfdl", function() {
        /**
        *  인천공항 원스톱 입주자서비스 프로젝트
        *  @FileName 	COM024P01.xfdl
        *  @Creator 	(주)이루온
        *  @CreateDate 	2024/08/29
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/08/29				김완성						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        this.param;
        var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); //필수함수
        	// 전달받은 파라메터 팝업창과 페이지오픈으로 파라메터 불러오는 방식이 달라짐
        	if(this.opener)
        	{
        		this.param = {
        			"id" : this.getOwnerFrame().sampleDataId
        		}
        	} else
        	{
        		this.param = this.getOwnerFrame().form.fvObjArgs;
        	}

        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnAdd : 추가 / cfnDel : 삭제 / cfnSave : 저장 / cfnPrint : 인쇄 / cfnExecl : 엑셀..)
        *******************************************************************************************************************************/
        this.cfnClose = function() {
        	console.log('cfnClose');
         	var sWinId = this.objApp.gdsOpenMenu.lookupAs(this.FRAME_MENUCOLUMNS.menuId, cMenuId.substring(0, 14), this.FRAME_MENUCOLUMNS.winId);
         	var objForm = this.objApp.gvFrsWork.all[sWinId];
        	objForm.form.divWork.form.cfnSearch(1);
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "sysMng/prgrmInfoStrg.do";
        	var inData      = "dsGet=dsGet";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        this.selectTransaction = function()
        {
        	var strSvcId    = "select";
        	var strSvcUrl   = "sysMng/prgrmInfoInq.do";
        	var inData      = "";
        	var outData     = "dsGet=dsGet";
        	var strArg      = "id=" + this.param.id;
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
        		case "select":

        			break;

        		case "combo":

        			break;

        		case "save":
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save_complete", gvRetMsg, null, "msgCallback");
        			break;
        	}
        };

        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);

        	if(sPopupId == "save")
        	{
        		if(oRtn.result == "Y") {
        			this.saveTransaction();
        		}
        	} else if(sPopupId == "save_complete")  {
        		console.log("123");
        		if(this.opener)
        		{
        		console.log("222");
        			this.close();
        		} else
        		{
        		console.log("333");
        			this.gfnCloseMenu(cMenuId);
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {

        	if(this.param != null && this.param.id != null && this.param.id != '')
        	{
        		this.selectTransaction();
        	} else
        	{
        		this.dsGet.setColumn(0, "frstRegId", this.objApp.gUser.userId);
        		this.dsGet.setColumn(0, "frstRegNm", this.objApp.gUser.userNm);
        	}

        	this.gfnCmmCode("combo", "dsCombo", "PRGRM_TY", "S");
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	this.gfnConfirmMsg("save", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"], null);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.div00.form.Combo01_00_00.addEventHandler("onitemchanged",this.divForm_divSch_Combo01_onitemchanged,this);
            this.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divPopBtn_Button00_00_onclick,this);
        };
        this.loadIncludeScript("COM024P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
