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
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem02\" componentid=\"div00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","320","173","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("첨부(구비서류)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07","1140","173","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"btnFold2\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/></Contents>");
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

            obj = new Button("btnFold2","853","6","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Div("div00_00_00","1360","199","100%","650",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("첨부파일");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01","20.00","242","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("출입자명단");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01","319","242","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("1");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00","20","242","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("2");
            obj.set_horizontalgap("10");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Grid("grdIncmgLst","78","173","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_binddataset("dsFile");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"120\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:A110\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellFileUp\" text=\"파일찾기\" expandshow=\"hide\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellFileDel\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","20.00","242","305","86",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdIncmgLst\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan04","0","242","100.00%","107",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("5");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_04","20.00","242","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("서약서");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_04","319","242","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("7");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","20","242","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("10");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_04\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Grid("grdWtoh","78","173","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_binddataset("dsFile");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"120\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:B110\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"파일선택\" cssclass=\"CellFileUp\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellFileDel\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_04","20.00","242","305","86",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_04\"/><PanelItem id=\"PanelItem02\" componentid=\"grdWtoh\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_04","0","242","100.00%","107",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_04\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_00","20.00","242","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("12");
            obj.set_text("투입자재 및 공구 반입 리스트");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","319","242","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("13");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","20","242","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("10");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Grid("grdMtrlCrynLst","78","173","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_binddataset("dsFile");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"120\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:C110\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"파일선택\" cssclass=\"CellFileUp\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellFileDel\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","20.00","242","305","86",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"grdMtrlCrynLst\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_00","0","242","100.00%","107",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_00\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_05","20.00","242","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("18");
            obj.set_text("전기관련 국가기술 자격증사본");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_05","319","242","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("19");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_05","20","242","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("20");
            obj.set_horizontalgap("10");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_05\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_05\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Grid("grdCrtfctDpct","78","173","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("21");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_binddataset("dsFile");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"120\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:D110\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"파일선택\" cssclass=\"CellFileUp\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellFileDel\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_05","20.00","242","305","86",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_05\"/><PanelItem id=\"PanelItem02\" componentid=\"grdCrtfctDpct\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_05","0","242","100.00%","107",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("23");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_05\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_01_06","20.00","242","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("24");
            obj.set_text("첨부(구비서류) 기타");
            obj.set_cssclass("sta_WF_Label_E");
            obj.set_fittocontents("width");
            obj.set_flexgrow("1");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01_06","319","242","305","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("25");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents/>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_06","20","242","100%","46",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("26");
            obj.set_horizontalgap("10");
            obj.set_tabletemplate("1* / 1* 1*");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_cssclass("pan_WF_FileTitle");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staLabel03_00_01_06\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_06\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Grid("grdAtchEtc","78","173","100%","40",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("27");
            obj.set_cssclass("grd_WF_FileAdd");
            obj.set_binddataset("dsFile");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"596\"/><Column size=\"120\" band=\"right\"/><Column size=\"80\" band=\"right\"/></Columns><Rows><Row size=\"38\"/></Rows><Band id=\"body\"><Cell text=\"bind:D110\" cssclass=\"CellFile\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"파일선택\" cssclass=\"CellFileUp\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"CellFileDel\" text=\"삭제\"/></Band></Format></Formats>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_06","20.00","242","305","86",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_06\"/><PanelItem id=\"PanelItem02\" componentid=\"grdAtchEtc\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);

            obj = new Panel("pan04_06","0","242","100.00%","107",null,null,null,null,null,null,this.div00_00_00.form);
            obj.set_taborder("29");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_verticalgap("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00_00_06\"/></Contents>");
            this.div00_00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00_00_00.form
            obj = new Layout("default","",0,0,this.div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel03_00_01.set_taborder("0");
                p.staLabel03_00_01.set_text("출입자명단");
                p.staLabel03_00_01.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01.set_fittocontents("width");
                p.staLabel03_00_01.set_flexgrow("1");
                p.staLabel03_00_01.move("20.00","242","305","46",null,null);

                p.Panel01.set_taborder("1");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.move("319","242","305","46",null,null);

                p.Panel00.set_taborder("2");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_tabletemplate("1* / 1* 1*");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_cssclass("pan_WF_FileTitle");
                p.Panel00.move("20","242","100%","46",null,null);

                p.grdIncmgLst.set_taborder("3");
                p.grdIncmgLst.set_cssclass("grd_WF_FileAdd");
                p.grdIncmgLst.set_binddataset("dsFile");
                p.grdIncmgLst.set_scrollbartype("none none");
                p.grdIncmgLst.move("78","173","100%","40",null,null);

                p.Panel02_00_00.set_taborder("4");
                p.Panel02_00_00.set_type("vertical");
                p.Panel02_00_00.set_flexgrow("1");
                p.Panel02_00_00.set_verticalgap("4");
                p.Panel02_00_00.set_fittocontents("height");
                p.Panel02_00_00.move("20.00","242","305","86",null,null);

                p.pan04.set_taborder("5");
                p.pan04.set_horizontalgap("20");
                p.pan04.set_flexcrossaxiswrapalign("start");
                p.pan04.set_flexwrap("wrap");
                p.pan04.set_fittocontents("height");
                p.pan04.set_spacing("10px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.set_verticalgap("0");
                p.pan04.move("0","242","100.00%","107",null,null);

                p.staLabel03_00_01_04.set_taborder("6");
                p.staLabel03_00_01_04.set_text("서약서");
                p.staLabel03_00_01_04.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01_04.set_fittocontents("width");
                p.staLabel03_00_01_04.set_flexgrow("1");
                p.staLabel03_00_01_04.move("20.00","242","305","46",null,null);

                p.Panel01_04.set_taborder("7");
                p.Panel01_04.set_flexmainaxisalign("end");
                p.Panel01_04.set_flexgrow("1");
                p.Panel01_04.set_horizontalgap("10");
                p.Panel01_04.move("319","242","305","46",null,null);

                p.Panel00_04.set_taborder("8");
                p.Panel00_04.set_horizontalgap("10");
                p.Panel00_04.set_tabletemplate("1* / 1* 1*");
                p.Panel00_04.set_flexwrap("wrap");
                p.Panel00_04.set_fittocontents("height");
                p.Panel00_04.set_cssclass("pan_WF_FileTitle");
                p.Panel00_04.move("20","242","100%","46",null,null);

                p.grdWtoh.set_taborder("9");
                p.grdWtoh.set_cssclass("grd_WF_FileAdd");
                p.grdWtoh.set_binddataset("dsFile");
                p.grdWtoh.set_scrollbartype("none none");
                p.grdWtoh.move("78","173","100%","40",null,null);

                p.Panel02_00_00_04.set_taborder("10");
                p.Panel02_00_00_04.set_type("vertical");
                p.Panel02_00_00_04.set_flexgrow("1");
                p.Panel02_00_00_04.set_verticalgap("4");
                p.Panel02_00_00_04.set_fittocontents("height");
                p.Panel02_00_00_04.move("20.00","242","305","86",null,null);

                p.pan04_04.set_taborder("11");
                p.pan04_04.set_horizontalgap("20");
                p.pan04_04.set_flexcrossaxiswrapalign("start");
                p.pan04_04.set_flexwrap("wrap");
                p.pan04_04.set_fittocontents("height");
                p.pan04_04.set_spacing("10px 20px 10px 20px");
                p.pan04_04.set_cssclass("pal_WF_DtlBg");
                p.pan04_04.set_verticalgap("0");
                p.pan04_04.move("0","242","100.00%","107",null,null);

                p.staLabel03_00_01_00.set_taborder("12");
                p.staLabel03_00_01_00.set_text("투입자재 및 공구 반입 리스트");
                p.staLabel03_00_01_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01_00.set_fittocontents("width");
                p.staLabel03_00_01_00.set_flexgrow("1");
                p.staLabel03_00_01_00.move("20.00","242","305","46",null,null);

                p.Panel01_00.set_taborder("13");
                p.Panel01_00.set_flexmainaxisalign("end");
                p.Panel01_00.set_flexgrow("1");
                p.Panel01_00.set_horizontalgap("10");
                p.Panel01_00.move("319","242","305","46",null,null);

                p.Panel00_00.set_taborder("14");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_tabletemplate("1* / 1* 1*");
                p.Panel00_00.set_flexwrap("wrap");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.set_cssclass("pan_WF_FileTitle");
                p.Panel00_00.move("20","242","100%","46",null,null);

                p.grdMtrlCrynLst.set_taborder("15");
                p.grdMtrlCrynLst.set_cssclass("grd_WF_FileAdd");
                p.grdMtrlCrynLst.set_binddataset("dsFile");
                p.grdMtrlCrynLst.set_scrollbartype("none none");
                p.grdMtrlCrynLst.move("78","173","100%","40",null,null);

                p.Panel02_00_00_00.set_taborder("16");
                p.Panel02_00_00_00.set_type("vertical");
                p.Panel02_00_00_00.set_flexgrow("1");
                p.Panel02_00_00_00.set_verticalgap("4");
                p.Panel02_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00.move("20.00","242","305","86",null,null);

                p.pan04_00.set_taborder("17");
                p.pan04_00.set_horizontalgap("20");
                p.pan04_00.set_flexcrossaxiswrapalign("start");
                p.pan04_00.set_flexwrap("wrap");
                p.pan04_00.set_fittocontents("height");
                p.pan04_00.set_spacing("10px 20px 10px 20px");
                p.pan04_00.set_cssclass("pal_WF_DtlBg");
                p.pan04_00.set_verticalgap("0");
                p.pan04_00.move("0","242","100.00%","107",null,null);

                p.staLabel03_00_01_05.set_taborder("18");
                p.staLabel03_00_01_05.set_text("전기관련 국가기술 자격증사본");
                p.staLabel03_00_01_05.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01_05.set_fittocontents("width");
                p.staLabel03_00_01_05.set_flexgrow("1");
                p.staLabel03_00_01_05.move("20.00","242","305","46",null,null);

                p.Panel01_05.set_taborder("19");
                p.Panel01_05.set_flexmainaxisalign("end");
                p.Panel01_05.set_flexgrow("1");
                p.Panel01_05.set_horizontalgap("10");
                p.Panel01_05.move("319","242","305","46",null,null);

                p.Panel00_05.set_taborder("20");
                p.Panel00_05.set_horizontalgap("10");
                p.Panel00_05.set_tabletemplate("1* / 1* 1*");
                p.Panel00_05.set_flexwrap("wrap");
                p.Panel00_05.set_fittocontents("height");
                p.Panel00_05.set_cssclass("pan_WF_FileTitle");
                p.Panel00_05.move("20","242","100%","46",null,null);

                p.grdCrtfctDpct.set_taborder("21");
                p.grdCrtfctDpct.set_cssclass("grd_WF_FileAdd");
                p.grdCrtfctDpct.set_binddataset("dsFile");
                p.grdCrtfctDpct.set_scrollbartype("none none");
                p.grdCrtfctDpct.move("78","173","100%","40",null,null);

                p.Panel02_00_00_05.set_taborder("22");
                p.Panel02_00_00_05.set_type("vertical");
                p.Panel02_00_00_05.set_flexgrow("1");
                p.Panel02_00_00_05.set_verticalgap("4");
                p.Panel02_00_00_05.set_fittocontents("height");
                p.Panel02_00_00_05.move("20.00","242","305","86",null,null);

                p.pan04_05.set_taborder("23");
                p.pan04_05.set_horizontalgap("20");
                p.pan04_05.set_flexcrossaxiswrapalign("start");
                p.pan04_05.set_flexwrap("wrap");
                p.pan04_05.set_fittocontents("height");
                p.pan04_05.set_spacing("10px 20px 10px 20px");
                p.pan04_05.set_cssclass("pal_WF_DtlBg");
                p.pan04_05.set_verticalgap("0");
                p.pan04_05.move("0","242","100.00%","107",null,null);

                p.staLabel03_00_01_06.set_taborder("24");
                p.staLabel03_00_01_06.set_text("첨부(구비서류) 기타");
                p.staLabel03_00_01_06.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_01_06.set_fittocontents("width");
                p.staLabel03_00_01_06.set_flexgrow("1");
                p.staLabel03_00_01_06.move("20.00","242","305","46",null,null);

                p.Panel01_06.set_taborder("25");
                p.Panel01_06.set_flexmainaxisalign("end");
                p.Panel01_06.set_flexgrow("1");
                p.Panel01_06.set_horizontalgap("10");
                p.Panel01_06.move("319","242","305","46",null,null);

                p.Panel00_06.set_taborder("26");
                p.Panel00_06.set_horizontalgap("10");
                p.Panel00_06.set_tabletemplate("1* / 1* 1*");
                p.Panel00_06.set_flexwrap("wrap");
                p.Panel00_06.set_fittocontents("height");
                p.Panel00_06.set_cssclass("pan_WF_FileTitle");
                p.Panel00_06.move("20","242","100%","46",null,null);

                p.grdAtchEtc.set_taborder("27");
                p.grdAtchEtc.set_cssclass("grd_WF_FileAdd");
                p.grdAtchEtc.set_binddataset("dsFile");
                p.grdAtchEtc.set_scrollbartype("none none");
                p.grdAtchEtc.move("78","173","100%","40",null,null);

                p.Panel02_00_00_06.set_taborder("28");
                p.Panel02_00_00_06.set_type("vertical");
                p.Panel02_00_00_06.set_flexgrow("1");
                p.Panel02_00_00_06.set_verticalgap("4");
                p.Panel02_00_00_06.set_fittocontents("height");
                p.Panel02_00_00_06.move("20.00","242","305","86",null,null);

                p.pan04_06.set_taborder("29");
                p.pan04_06.set_horizontalgap("20");
                p.pan04_06.set_flexcrossaxiswrapalign("start");
                p.pan04_06.set_flexwrap("wrap");
                p.pan04_06.set_fittocontents("height");
                p.pan04_06.set_spacing("10px 20px 10px 20px");
                p.pan04_06.set_cssclass("pal_WF_DtlBg");
                p.pan04_06.set_verticalgap("0");
                p.pan04_06.move("0","242","100.00%","107",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00_00.form
            obj = new Layout("mobile","",0,0,this.div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.div00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00_00_00.form
            obj = new Layout("Layout0","",0,0,this.div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pan04.move("0","242","100.00%","157",null,null);

                p.pan04_04.move("0","242","100.00%","157",null,null);

                p.pan04_00.move("0","242","100.00%","157",null,null);

                p.pan04_05.move("0","242","100.00%","157",null,null);

                p.pan04_06.move("0","242","100.00%","157",null,null);

                p.Panel02_00_00_06.move("20.00","242","440","136",null,null);

                p.Panel02_00_00_05.move("20.00","242","440","136",null,null);

                p.Panel02_00_00_00.move("20.00","242","440","136",null,null);

                p.Panel02_00_00_04.move("20.00","242","440","136",null,null);

                p.Panel02_00_00.move("20.00","242","440","136",null,null);

                p.Panel00.move("20","242","100%","92",null,null);

                p.Panel00_04.move("20","242","100%","92",null,null);

                p.Panel00_00.move("20","242","100%","92",null,null);

                p.Panel00_05.move("20","242","100%","92",null,null);

                p.Panel00_06.move("20","242","100%","92",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00_00_00.form.addLayout(obj.name, obj);
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
                p.staSubTitle.set_text("첨부(구비서류)");
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

                p.btnFold2.set_taborder("5");
                p.btnFold2.set_cssclass("btn_WF_ACMinus");
                p.btnFold2.move("853","6","34","34",null,null);

                p.div00_00_00.set_taborder("6");
                p.div00_00_00.set_text("첨부파일");
                p.div00_00_00.set_cssclass("div_WF_Bg");
                p.div00_00_00.set_fittocontents("height");
                p.div00_00_00.move("1360","199","100%","650",null,null);
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
                p.div00_00_00.move("1360","199","100.00%","785",null,null);

                p.panForm.set_spacing("0px 20px 10px 20px");
                p.panForm.move("0","0","100.00%","1065",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CST015M04.xfdl","xjs::TaskCom.xjs");
        this.registerScript("CST015M04.xfdl", function() {
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

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj); 								//필수함수
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
         * @name : btnFold_onclick
         * @description : 작업계획 접기/펼치기
        ***************************************************************************/
        this.btnFold1_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div00_01_02_00_00_00.visible = true;
        	} else {
        		this.div00_01_02_00_00_00.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.div00_01_02_00_00_00.form.resetScroll();
        };

        /**************************************************************************
         * @name : btnFold_onclick
         * @description : 첨부(구비서류) 접기/펼치기
        ***************************************************************************/
        this.btnFold2_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div00_00_00.visible = true;
        	} else {
        		this.div00_00_00.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.div00_00_00.form.resetScroll();
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
        		case "grdIncmgLst":		//출입자명단
        			colId = "A110";
        			break;
        		case "grdWtoh":			//서약서
        			colId = "B110";
        			break;
        		case "grdMtrlCrynLst":	//투입자재및공구반입리스트
        			colId = "C110";
        			break;
        		case "grdCrtfctDpct":	//전기관련 국가기술 자격증사본
        			colId = "D110";
        			break;
        		case "grdAtchEtc":		//첨부(구비서류)기타
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnFold2.addEventHandler("onclick",this.btnFold2_onclick,this);
            this.div00_00_00.form.grdIncmgLst.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.div00_00_00.form.grdWtoh.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.div00_00_00.form.grdMtrlCrynLst.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.div00_00_00.form.grdCrtfctDpct.addEventHandler("oncellclick",this.Grid_oncellclick,this);
            this.div00_00_00.form.grdAtchEtc.addEventHandler("oncellclick",this.Grid_oncellclick,this);
        };
        this.loadIncludeScript("CST015M04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
