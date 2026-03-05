(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CST13M00_01");
            this.set_titletext("신청서작성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staSubTitle00","245","340","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("작업방법 안내");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose00","1170","315","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnFold1","1195","307","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","1315","340","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnClose00\"/><PanelItem id=\"PanelItem02\" componentid=\"btnFold1\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("divInfoGuide","1330","30","100%","300",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("서비스 흐름 및 작업방법 안내");
            obj.set_cssclass("div_WF_InfoGuide");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("panForm","0","10","100.00%","925",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_fittocontents("height");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"panTitle00\"/><PanelItem id=\"PanelItem00\" componentid=\"divInfoGuide\"/><PanelItem id=\"PanelItem02\" componentid=\"panTitle\"/><PanelItem id=\"PanelItem03\" componentid=\"div00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","245","340","100%","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","1315","340","209","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnClose\"/><PanelItem id=\"PanelItem02\" componentid=\"btnFold2\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","1170","315","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnFold2","1195","307","34","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_ACMinus");
            this.addChild(obj.name, obj);

            obj = new Panel("panTitle","245","340","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("5");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("div00","1460","380","100.00%","485",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신청자정보");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Panel("pan00","0","60","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtAplySeNm","10.00","158","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","10.00","98","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplySeNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("신청자");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtAplcntNm","20.00","288","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","20.00","242","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtAplcntNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan02","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01","970","270","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_text("신청자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtRgtrCoNm1","970","315","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","970.00","270","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRgtrCoNm1\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_Label_E");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtHwrtInptCtinfoNo","20.00","288","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00","20.00","242","300","136",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("panBlank","970.00","270","300","1",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan03","0","242","100.00%","147",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00\"/><PanelItem id=\"PanelItem02\" componentid=\"panBlank\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","20","303","100%","85",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_verticalgap("4");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"edtHwrtInptCtinfoNo\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_00_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_00_00_01","10","98","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtRgtrId","20.00","288","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan_04_00_00","20.00","242","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRgtrId\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staLabel03_01_00_01","970","270","100%","46",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_text("등록자 회사명");
            obj.set_cssclass("sta_WF_Label");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtRgtrCoNm","970","315","100%","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan04_01_00","970.00","270","300","86",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel03_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtRgtrCoNm\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("pan06","0","242","100.00%","96",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan_04_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"pan04_01_00\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","22","316","100%","41",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
            obj.set_cssclass("sta_WF_Des");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("panTitle00","10","310","100.00%","70",null,null,null,null,"70",null,this);
            obj.set_taborder("12");
            obj.set_fittocontents("none");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divInfoGuide.form
            obj = new Layout("default","",0,0,this.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divInfoGuide.form
            obj = new Layout("mobile","",0,0,this.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divInfoGuide.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divInfoGuide.form
            obj = new Layout("Layout0","",0,0,this.divInfoGuide.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divInfoGuide.form.addLayout(obj.name, obj);
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
                p.pan00.move("0","60","100.00%","96",null,null);

                p.staLabel00.set_taborder("1");
                p.staLabel00.set_text("신청구분");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.edtAplySeNm.set_taborder("2");
                p.edtAplySeNm.set_readonly("true");
                p.edtAplySeNm.move("10.00","158","100%","40",null,null);

                p.Panel00_00.set_taborder("3");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_minwidth("");
                p.Panel00_00.move("10.00","98","300","86",null,null);

                p.staLabel03_00.set_taborder("4");
                p.staLabel03_00.set_text("신청자");
                p.staLabel03_00.set_cssclass("sta_WF_Label");
                p.staLabel03_00.move("10","98","100%","46",null,null);

                p.edtAplcntNm.set_taborder("5");
                p.edtAplcntNm.set_readonly("true");
                p.edtAplcntNm.set_enable("true");
                p.edtAplcntNm.move("20.00","288","100%","40",null,null);

                p.Panel02_00.set_taborder("6");
                p.Panel02_00.set_type("vertical");
                p.Panel02_00.set_flexgrow("1");
                p.Panel02_00.move("20.00","242","300","86",null,null);

                p.pan02.set_taborder("7");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","242","100.00%","96",null,null);

                p.staLabel03_01.set_taborder("8");
                p.staLabel03_01.set_text("신청자 회사명");
                p.staLabel03_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01.move("970","270","100%","46",null,null);

                p.edtRgtrCoNm1.set_taborder("9");
                p.edtRgtrCoNm1.set_readonly("true");
                p.edtRgtrCoNm1.move("970","315","100%","40",null,null);

                p.Panel02_01.set_taborder("10");
                p.Panel02_01.set_type("vertical");
                p.Panel02_01.set_flexgrow("1");
                p.Panel02_01.move("970.00","270","300","86",null,null);

                p.staLabel03_00_00.set_taborder("11");
                p.staLabel03_00_00.set_text("휴대폰번호");
                p.staLabel03_00_00.set_cssclass("sta_WF_Label_E");
                p.staLabel03_00_00.move("10","98","100%","46",null,null);

                p.edtHwrtInptCtinfoNo.set_taborder("12");
                p.edtHwrtInptCtinfoNo.set_readonly("true");
                p.edtHwrtInptCtinfoNo.set_enable("true");
                p.edtHwrtInptCtinfoNo.move("20.00","288","100%","40",null,null);

                p.pan_04_00.set_taborder("13");
                p.pan_04_00.set_type("vertical");
                p.pan_04_00.set_flexgrow("1");
                p.pan_04_00.set_fittocontents("height");
                p.pan_04_00.move("20.00","242","300","136",null,null);

                p.panBlank.set_taborder("14");
                p.panBlank.set_type("vertical");
                p.panBlank.set_flexgrow("1");
                p.panBlank.move("970.00","270","300","1",null,null);

                p.pan03.set_taborder("15");
                p.pan03.set_horizontalgap("20");
                p.pan03.set_flexcrossaxiswrapalign("start");
                p.pan03.set_flexwrap("wrap");
                p.pan03.set_fittocontents("height");
                p.pan03.set_verticalgap("0");
                p.pan03.set_spacing("0px 20px 10px 20px");
                p.pan03.set_cssclass("pal_WF_DtlBg");
                p.pan03.move("0","242","100.00%","147",null,null);

                p.Panel01.set_taborder("24");
                p.Panel01.set_type("vertical");
                p.Panel01.set_verticalgap("4");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("20","303","100%","85",null,null);

                p.staLabel03_00_00_01.set_taborder("16");
                p.staLabel03_00_00_01.set_text("등록자");
                p.staLabel03_00_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_00_00_01.move("10","98","100%","46",null,null);

                p.edtRgtrId.set_taborder("17");
                p.edtRgtrId.set_readonly("true");
                p.edtRgtrId.move("20.00","288","100%","40",null,null);

                p.pan_04_00_00.set_taborder("18");
                p.pan_04_00_00.set_type("vertical");
                p.pan_04_00_00.set_flexgrow("1");
                p.pan_04_00_00.move("20.00","242","300","86",null,null);

                p.staLabel03_01_00_01.set_taborder("19");
                p.staLabel03_01_00_01.set_text("등록자 회사명");
                p.staLabel03_01_00_01.set_cssclass("sta_WF_Label");
                p.staLabel03_01_00_01.move("970","270","100%","46",null,null);

                p.edtRgtrCoNm.set_taborder("20");
                p.edtRgtrCoNm.set_readonly("true");
                p.edtRgtrCoNm.move("970","315","100%","40",null,null);

                p.pan04_01_00.set_taborder("21");
                p.pan04_01_00.set_type("vertical");
                p.pan04_01_00.set_flexgrow("1");
                p.pan04_01_00.move("970.00","270","300","86",null,null);

                p.pan06.set_taborder("22");
                p.pan06.set_horizontalgap("20");
                p.pan06.set_flexcrossaxiswrapalign("start");
                p.pan06.set_flexwrap("wrap");
                p.pan06.set_fittocontents("height");
                p.pan06.set_verticalgap("0");
                p.pan06.set_spacing("0px 20px 10px 20px");
                p.pan06.set_cssclass("pal_WF_DtlBg");
                p.pan06.move("0","242","100.00%","96",null,null);

                p.sta00_00_00_00.set_taborder("23");
                p.sta00_00_00_00.set_text("휴대폰번호는 우측상단 \"사용자 이름\" 클릭 후 해당 메뉴에서 등록 및 수정이 가능합니다.");
                p.sta00_00_00_00.set_cssclass("sta_WF_Des");
                p.sta00_00_00_00.set_fittocontents("height");
                p.sta00_00_00_00.set_flexgrow("1");
                p.sta00_00_00_00.move("22","316","100%","41",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form
            obj = new Layout("mobile","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

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
                p.pan02.move("0","242","100.00%","183",null,null);

                p.pan03.move("0","242","100.00%","148",null,null);

                p.pan06.move("0","242","100.00%","183",null,null);
            	}
            );
            obj.set_type("vertical");
            this.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("신청서작성");

                p.staSubTitle00.set_taborder("8");
                p.staSubTitle00.set_text("작업방법 안내");
                p.staSubTitle00.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle00.move("245","340","100%","50",null,null);

                p.btnClose00.set_taborder("9");
                p.btnClose00.set_cssclass("btn_WF_ACPlus");
                p.btnClose00.set_visible("false");
                p.btnClose00.move("1170","315","34","34",null,null);

                p.btnFold1.set_taborder("10");
                p.btnFold1.set_cssclass("btn_WF_ACMinus");
                p.btnFold1.move("1195","307","34","34",null,null);

                p.Panel00_00.set_taborder("11");
                p.Panel00_00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00_00.set_flexcrossaxisalign("center");
                p.Panel00_00.set_flexmainaxisalign("end");
                p.Panel00_00.set_horizontalgap("10");
                p.Panel00_00.set_spacing("0px 10px 0px 10px");
                p.Panel00_00.move("1315","340","209","50",null,null);

                p.divInfoGuide.set_taborder("0");
                p.divInfoGuide.set_text("서비스 흐름 및 작업방법 안내");
                p.divInfoGuide.set_cssclass("div_WF_InfoGuide");
                p.divInfoGuide.set_fittocontents("height");
                p.divInfoGuide.move("1330","30","100%","300",null,null);

                p.panForm.set_taborder("2");
                p.panForm.set_fittocontents("height");
                p.panForm.set_type("vertical");
                p.panForm.move("0","10","100.00%","925",null,null);

                p.staSubTitle.set_taborder("3");
                p.staSubTitle.set_text("신청자정보");
                p.staSubTitle.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle.move("245","340","100%","50",null,null);

                p.Panel00.set_taborder("4");
                p.Panel00.set_cssclass("pal_WF_TitBtnBg");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_flexmainaxisalign("end");
                p.Panel00.set_horizontalgap("10");
                p.Panel00.set_spacing("0px 10px 0px 10px");
                p.Panel00.move("1315","340","209","50",null,null);

                p.btnClose.set_taborder("6");
                p.btnClose.set_cssclass("btn_WF_ACPlus");
                p.btnClose.set_visible("false");
                p.btnClose.move("1170","315","34","34",null,null);

                p.btnFold2.set_taborder("7");
                p.btnFold2.set_cssclass("btn_WF_ACMinus");
                p.btnFold2.move("1195","307","34","34",null,null);

                p.panTitle.set_taborder("5");
                p.panTitle.set_fittocontents("none");
                p.panTitle.set_flexcrossaxisalign("end");
                p.panTitle.set_minheight("70");
                p.panTitle.set_maxheight("");
                p.panTitle.move("245","340","100.00%","70",null,null);

                p.div00.set_taborder("1");
                p.div00.set_text("신청자정보");
                p.div00.set_cssclass("div_WF_Bg");
                p.div00.set_fittocontents("height");
                p.div00.set_formscrollbartype("none none");
                p.div00.set_formscrolltype("none");
                p.div00.move("1460","380","100.00%","485",null,null);

                p.panTitle00.set_taborder("12");
                p.panTitle00.set_fittocontents("none");
                p.panTitle00.set_flexcrossaxisalign("end");
                p.panTitle00.set_minheight("70");
                p.panTitle00.set_maxheight("");
                p.panTitle00.move("10","310","100.00%","70",null,null);
            	}
            );
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Phone_screen",480,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.panForm.set_spacing("0px 20px 10px 20px");
                p.panForm.move("0","10","100%","2000",null,null);

                p.div00.move("1460","380","100.00%","610",null,null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div00.form.edtAplcntNm","value","dsMvmnRgnMst","aplcntNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div00.form.edtHwrtInptCtinfoNo","value","dsMvmnRgnMst","hwrtInptCtinfoNo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00.form.edtRgtrId","value","dsMvmnRgnMst","rgtrNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div00.form.edtRgtrCoNm1","value","dsMvmnRgnMst","aplcntInstNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div00.form.edtRgtrCoNm","value","dsMvmnRgnMst","rgtrInstNm");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CST013M01.xfdl", function() {
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

        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.divInfoGuide.visible = false;
        	this.resetScroll();
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
         * @description : 작업방법 안내 접기/펴기
         ***************************************************************************/
        this.btnFold1_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.divInfoGuide.visible = true;
        	} else {
        		this.divInfoGuide.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.resetScroll();
        };

        /**************************************************************************
         * @name : btnFold2_onclick
         * @description : 신청자 정보 접기/펴기
         ***************************************************************************/
        this.btnFold2_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ACPlus") {
        		this.div00.visible = true;
        	} else {
        		this.div00.visible = false;
        	}
        	// 펼침(축소)
        	obj.cssclass = obj.cssclass == "btn_WF_ACPlus" ? "btn_WF_ACMinus" : "btn_WF_ACPlus";  // +,- css 변경
        	this.resetScroll();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnFold1.addEventHandler("onclick",this.btnFold1_onclick,this);
            this.btnFold2.addEventHandler("onclick",this.btnFold2_onclick,this);
        };
        this.loadIncludeScript("CST013M01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
