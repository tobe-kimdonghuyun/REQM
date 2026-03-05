(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Bottom");
            this.set_titletext("Form_Bottom");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Panel("Panel00","0","0","100%","88",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#646464");
            obj.set_spacing("15px 80px  15px 80px");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_flexcrossaxisalign("start");
            obj.set_verticalgap("15");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"PanelSta\"/><PanelItem id=\"PanelItem02\" componentid=\"PanelBtn\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelSta","80","0","502","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_horizontalgap("26");
            obj.set_flexcrossaxisalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"sta00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"sta00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"sta00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelBtn","1060","0","300","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("16");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01\"/><PanelItem id=\"PanelItem02\" componentid=\"btn01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","214.00","137","56","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이용약관");
            obj.set_cssclass("sta_BF_BtnTxt2");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","296.00","137","97","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저작권보호정책");
            obj.set_cssclass("sta_BF_BtnTxt2");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","419.00","137","160","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("이메일 주소 무단수집거부");
            obj.set_cssclass("sta_BF_BtnTxt2");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","77.00","137","111","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("개인정보처리방침");
            obj.set_cssclass("sta_BF_BtnTxt");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","834","17","86","38",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("고객의 소리");
            obj.set_cssclass("btn_BF_Button");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn01_00","830.00","25","95","38",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("청렴혁신센터");
            obj.set_cssclass("btn_BF_Button");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","10.00","69","150","16",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("T2 032-741-3535~6");
            obj.set_cssclass("sta_WF_TxtBlack");
            obj.set_usedecorate("true");
            obj.set_fittocontents("none");
            obj.getSetter("flexcrossaxisalign").set("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","160","388","271","16",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("평일 : 09:00~18:00(점심, 토/공휴일 휴무)");
            obj.set_cssclass("sta_WF_Txt60013, sta_WF_Txt72");
            obj.set_fittocontents("none");
            obj.set_padding("1px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","69.00","9","115","18",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("인천공항 대표전화");
            obj.set_fittocontents("both");
            obj.set_cssclass("sta_WF_Txt40014");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelTelL","80.00","118","431","60",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("5");
            obj.set_type("vertical");
            obj.set_verticalgap("5");
            obj.set_fittocontents("height");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00_01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelTelR","888.5","412","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_flexcrossaxisalign("end");
            obj.set_horizontalgap("0");
            obj.set_flexmainaxisalign("start");
            obj.set_verticalgap("5");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"sta03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","1120.00","441","300","45",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("14");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"sta03_00\"/><PanelItem id=\"PanelItem00\" componentid=\"sta04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelTTel","0","Panel00:0","100%","110",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_spacing("25px 80px 25px 80px");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("15");
            obj.set_flexcrossaxiswrapalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"PanelTelL\"/><PanelItem id=\"PanelItem02\" componentid=\"PanelTelR\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_02","10.00","10","216","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("인천국제공항 입주자서비스 플랫폼");
            obj.set_fittocontents("none");
            obj.set_cssclass("sta_WF_Txt50014");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01","10.00","38","150","16",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("T1 032-741-3301~2");
            obj.set_cssclass("sta_WF_TxtBlack");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","59","431","17.85",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_flexcrossaxisalign("center");
            obj.set_fittocontents("width");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"sta00_01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"sta01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelEnd","0","PanelTTel:0","100%","82",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_spacing("16px 80px  10px 80px");
            obj.set_border("1px solid #e8e8e8,0px none,0px none");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_flexcrossaxiswrapalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"PanelCopy\"/><PanelItem id=\"PanelItem02\" componentid=\"PanelLink\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelCopy","77.00","16","640","55",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("start");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCopy\"/><PanelItem id=\"PanelItem02\" componentid=\"staBlank\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("PanelLink","887","198","200","55",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_flexcrossaxisalign("start");
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("start");
            obj.set_flexgrow("0");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"cbo00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staBlank","115","265","20","10",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Static("sta03_00","1190.00","433","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("(24 시간운영)");
            obj.set_cssclass("sta_WF_Txt60012, sta_WF_Txt72");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","sta03_00:0","411","186","45",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("1577-2600");
            obj.set_cssclass("sta_WF_Txt60036");
            obj.set_textAlign("right");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staCopy","80.00","215","370","45.17",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("(22382) 인천광역시 중구 공항로 424번길 47 인천국제공항공사\r\nCopyright Incheon International Arport Corporation. All rights reserved.");
            obj.set_cssclass("sta_WF_Txt40014, sta_WF_Txt72");
            obj.set_verticalAlign("top");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00","764","455","200","45",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_tooltiptext("관련사이트");
            obj.set_text("관련사이트");
            obj.set_value("관련사이트");
            obj.set_index("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,280,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Form_Bottom");

                p.Panel00.set_taborder("0");
                p.Panel00.set_background("#646464");
                p.Panel00.set_spacing("15px 80px  15px 80px");
                p.Panel00.set_flexmainaxisalign("spacebetween");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_flexcrossaxiswrapalign("center");
                p.Panel00.set_flexcrossaxisalign("start");
                p.Panel00.set_verticalgap("15");
                p.Panel00.set_maxheight("");
                p.Panel00.move("0","0","100%","88",null,null);

                p.PanelSta.set_taborder("1");
                p.PanelSta.set_horizontalgap("26");
                p.PanelSta.set_flexcrossaxisalign("start");
                p.PanelSta.set_flexwrap("wrap");
                p.PanelSta.set_verticalgap("0");
                p.PanelSta.set_flexcrossaxiswrapalign("start");
                p.PanelSta.set_flexgrow("1");
                p.PanelSta.set_fittocontents("height");
                p.PanelSta.set_flexmainaxisalign("start");
                p.PanelSta.move("80","0","502","25",null,null);

                p.PanelBtn.set_taborder("2");
                p.PanelBtn.set_flexcrossaxisalign("start");
                p.PanelBtn.set_horizontalgap("16");
                p.PanelBtn.set_flexmainaxisalign("end");
                p.PanelBtn.set_flexgrow("1");
                p.PanelBtn.move("1060","0","300","38",null,null);

                p.sta00_00_00.set_taborder("3");
                p.sta00_00_00.set_text("이용약관");
                p.sta00_00_00.set_cssclass("sta_BF_BtnTxt2");
                p.sta00_00_00.set_fittocontents("width");
                p.sta00_00_00.move("214.00","137","56","25",null,null);

                p.sta00_00_00_00.set_taborder("4");
                p.sta00_00_00_00.set_text("저작권보호정책");
                p.sta00_00_00_00.set_cssclass("sta_BF_BtnTxt2");
                p.sta00_00_00_00.set_fittocontents("width");
                p.sta00_00_00_00.move("296.00","137","97","25",null,null);

                p.sta00_00_00_00_00.set_taborder("5");
                p.sta00_00_00_00_00.set_text("이메일 주소 무단수집거부");
                p.sta00_00_00_00_00.set_cssclass("sta_BF_BtnTxt2");
                p.sta00_00_00_00_00.set_fittocontents("width");
                p.sta00_00_00_00_00.move("419.00","137","160","25",null,null);

                p.sta00_00.set_taborder("6");
                p.sta00_00.set_text("개인정보처리방침");
                p.sta00_00.set_cssclass("sta_BF_BtnTxt");
                p.sta00_00.set_fittocontents("width");
                p.sta00_00.move("77.00","137","111","25",null,null);

                p.btn01.set_taborder("7");
                p.btn01.set_text("고객의 소리");
                p.btn01.set_cssclass("btn_BF_Button");
                p.btn01.set_fittocontents("width");
                p.btn01.move("834","17","86","38",null,null);

                p.btn01_00.set_taborder("8");
                p.btn01_00.set_text("청렴혁신센터");
                p.btn01_00.set_cssclass("btn_BF_Button");
                p.btn01_00.set_fittocontents("width");
                p.btn01_00.move("830.00","25","95","38",null,null);

                p.sta00_01_00_00.set_taborder("22");
                p.sta00_01_00_00.set_text("T2 032-741-3535~6");
                p.sta00_01_00_00.set_cssclass("sta_WF_TxtBlack");
                p.sta00_01_00_00.set_usedecorate("true");
                p.sta00_01_00_00.set_fittocontents("none");
                p.sta00_01_00_00.getSetter("flexcrossaxisalign").set("center");
                p.sta00_01_00_00.move("10.00","69","150","16",null,null);

                p.sta01.set_taborder("9");
                p.sta01.set_text("평일 : 09:00~18:00(점심, 토/공휴일 휴무)");
                p.sta01.set_cssclass("sta_WF_Txt60013, sta_WF_Txt72");
                p.sta01.set_fittocontents("none");
                p.sta01.set_padding("1px 0px 0px");
                p.sta01.move("160","388","271","16",null,null);

                p.sta03.set_taborder("11");
                p.sta03.set_text("인천공항 대표전화");
                p.sta03.set_fittocontents("both");
                p.sta03.set_cssclass("sta_WF_Txt40014");
                p.sta03.set_textAlign("right");
                p.sta03.move("69.00","9","115","18",null,null);

                p.PanelTelL.set_taborder("20");
                p.PanelTelL.set_flexcrossaxisalign("start");
                p.PanelTelL.set_horizontalgap("5");
                p.PanelTelL.set_type("vertical");
                p.PanelTelL.set_verticalgap("5");
                p.PanelTelL.set_fittocontents("height");
                p.PanelTelL.set_flexgrow("0");
                p.PanelTelL.move("80.00","118","431","60",null,null);

                p.PanelTelR.set_taborder("15");
                p.PanelTelR.set_flexcrossaxisalign("end");
                p.PanelTelR.set_horizontalgap("0");
                p.PanelTelR.set_flexmainaxisalign("start");
                p.PanelTelR.set_verticalgap("5");
                p.PanelTelR.set_type("vertical");
                p.PanelTelR.set_fittocontents("height");
                p.PanelTelR.set_flexgrow("0");
                p.PanelTelR.move("888.5","412","300","60",null,null);

                p.Panel02.set_taborder("16");
                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.set_flexcrossaxisalign("center");
                p.Panel02.set_horizontalgap("14");
                p.Panel02.move("1120.00","441","300","45",null,null);

                p.PanelTTel.set_taborder("17");
                p.PanelTTel.set_spacing("25px 80px 25px 80px");
                p.PanelTTel.set_flexmainaxisalign("spacebetween");
                p.PanelTTel.set_flexwrap("wrap");
                p.PanelTTel.set_fittocontents("height");
                p.PanelTTel.set_verticalgap("15");
                p.PanelTTel.set_flexcrossaxiswrapalign("start");
                p.PanelTTel.move("0","Panel00:0","100%","110",null,null);

                p.sta00_02.set_taborder("18");
                p.sta00_02.set_text("인천국제공항 입주자서비스 플랫폼");
                p.sta00_02.set_fittocontents("none");
                p.sta00_02.set_cssclass("sta_WF_Txt50014");
                p.sta00_02.move("10.00","10","216","20",null,null);

                p.sta00_01_01.set_taborder("19");
                p.sta00_01_01.set_text("T1 032-741-3301~2");
                p.sta00_01_01.set_cssclass("sta_WF_TxtBlack");
                p.sta00_01_01.set_usedecorate("true");
                p.sta00_01_01.move("10.00","38","150","16",null,null);

                p.Panel04.set_taborder("21");
                p.Panel04.set_flexcrossaxisalign("center");
                p.Panel04.set_fittocontents("width");
                p.Panel04.set_horizontalgap("10");
                p.Panel04.move("0","59","431","17.85",null,null);

                p.PanelEnd.set_taborder("23");
                p.PanelEnd.set_spacing("16px 80px  10px 80px");
                p.PanelEnd.set_border("1px solid #e8e8e8,0px none,0px none");
                p.PanelEnd.set_flexmainaxisalign("spacebetween");
                p.PanelEnd.set_flexwrap("wrap");
                p.PanelEnd.set_fittocontents("height");
                p.PanelEnd.set_flexcrossaxiswrapalign("start");
                p.PanelEnd.move("0","PanelTTel:0","100%","82",null,null);

                p.PanelCopy.set_taborder("24");
                p.PanelCopy.set_type("vertical");
                p.PanelCopy.set_flexmainaxisalign("start");
                p.PanelCopy.set_flexcrossaxiswrapalign("start");
                p.PanelCopy.move("77.00","16","640","55",null,null);

                p.PanelLink.set_taborder("25");
                p.PanelLink.set_flexcrossaxisalign("start");
                p.PanelLink.set_type("vertical");
                p.PanelLink.set_flexmainaxisalign("start");
                p.PanelLink.set_flexgrow("0");
                p.PanelLink.move("887","198","200","55",null,null);

                p.staBlank.set_taborder("26");
                p.staBlank.move("115","265","20","10",null,null);

                p.sta03_00.set_taborder("14");
                p.sta03_00.set_text("(24 시간운영)");
                p.sta03_00.set_cssclass("sta_WF_Txt60012, sta_WF_Txt72");
                p.sta03_00.set_textAlign("right");
                p.sta03_00.move("1190.00","433","100","45",null,null);

                p.sta04.set_taborder("12");
                p.sta04.set_text("1577-2600");
                p.sta04.set_cssclass("sta_WF_Txt60036");
                p.sta04.set_textAlign("right");
                p.sta04.set_fittocontents("width");
                p.sta04.move("sta03_00:0","411","186","45",null,null);

                p.staCopy.set_taborder("10");
                p.staCopy.set_text("(22382) 인천광역시 중구 공항로 424번길 47 인천국제공항공사\r\nCopyright Incheon International Arport Corporation. All rights reserved.");
                p.staCopy.set_cssclass("sta_WF_Txt40014, sta_WF_Txt72");
                p.staCopy.set_verticalAlign("top");
                p.staCopy.set_fittocontents("height");
                p.staCopy.set_flexgrow("1");
                p.staCopy.move("80.00","215","370","45.17",null,null);

                p.cbo00.set_taborder("13");
                p.cbo00.set_tooltiptext("관련사이트");
                p.cbo00.set_text("관련사이트");
                p.cbo00.set_value("관련사이트");
                p.cbo00.set_index("-1");
                p.cbo00.move("764","455","200","45",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("default0","Phone_screen",480,438,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("0");
                p.Panel00.set_spacing("10px 20px");
                p.Panel00.set_flexmainaxisalign("center");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_flexcrossaxiswrapalign("center");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("15");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_minheight("88");
                p.Panel00.set_maxheight("");
                p.Panel00.move("0","0","100.00%","131",null,null);

                p.PanelSta.set_taborder("1");
                p.PanelSta.set_horizontalgap("10");
                p.PanelSta.set_flexcrossaxisalign("start");
                p.PanelSta.set_flexwrap("wrap");
                p.PanelSta.set_verticalgap("0");
                p.PanelSta.set_flexcrossaxiswrapalign("center");
                p.PanelSta.set_flexgrow("0");
                p.PanelSta.set_fittocontents("height");
                p.PanelSta.move("80","0","100%","35",null,null);

                p.PanelBtn.set_taborder("2");
                p.PanelBtn.set_flexcrossaxisalign("start");
                p.PanelBtn.set_horizontalgap("16");
                p.PanelBtn.set_flexmainaxisalign("end");
                p.PanelBtn.set_flexgrow("0");
                p.PanelBtn.move("1060","0","100%","38",null,null);

                p.sta00_00_00.set_taborder("3");
                p.sta00_00_00.set_text("이용약관");
                p.sta00_00_00.set_cssclass("sta_BF_BtnTxt2");
                p.sta00_00_00.set_fittocontents("width");
                p.sta00_00_00.move("214.00","137","56","25",null,null);

                p.sta00_00_00_00.set_taborder("4");
                p.sta00_00_00_00.set_text("저작권보호정책");
                p.sta00_00_00_00.set_cssclass("sta_BF_BtnTxt2");
                p.sta00_00_00_00.set_fittocontents("width");
                p.sta00_00_00_00.move("296.00","137","97","25",null,null);

                p.sta00_00_00_00_00.set_taborder("5");
                p.sta00_00_00_00_00.set_text("이메일 주소 무단수집거부");
                p.sta00_00_00_00_00.set_cssclass("sta_BF_BtnTxt2");
                p.sta00_00_00_00_00.set_fittocontents("width");
                p.sta00_00_00_00_00.move("419.00","137","160","25",null,null);

                p.sta00_00.set_taborder("6");
                p.sta00_00.set_text("개인정보처리방침");
                p.sta00_00.set_cssclass("sta_BF_BtnTxt");
                p.sta00_00.set_fittocontents("width");
                p.sta00_00.move("77.00","137","111","25",null,null);

                p.btn01.set_taborder("7");
                p.btn01.set_text("고객의 소리");
                p.btn01.set_cssclass("btn_BF_Button");
                p.btn01.set_fittocontents("width");
                p.btn01.move("834","17","86","38",null,null);

                p.btn01_00.set_taborder("8");
                p.btn01_00.set_text("청렴혁신센터");
                p.btn01_00.set_cssclass("btn_BF_Button");
                p.btn01_00.set_fittocontents("width");
                p.btn01_00.move("830.00","25","95","38",null,null);

                p.sta00_01_00_00.set_taborder("22");
                p.sta00_01_00_00.set_text("T2 032-741-3535~6");
                p.sta00_01_00_00.set_cssclass("sta_WF_TxtBlack");
                p.sta00_01_00_00.set_usedecorate("true");
                p.sta00_01_00_00.set_fittocontents("width");
                p.sta00_01_00_00.move("10.00","69","150","16",null,null);

                p.sta01.set_taborder("9");
                p.sta01.set_text("평일 : 09:00~18:00(점심, 토/공휴일 휴무)");
                p.sta01.set_cssclass("sta_WF_Txt60013, sta_WF_Txt72");
                p.sta01.set_fittocontents("width");
                p.sta01.set_padding("1px 0px 0px");
                p.sta01.move("sta00_01_00_00:0","388","271","16",null,null);

                p.sta03.set_taborder("11");
                p.sta03.set_text("인천공항 대표전화");
                p.sta03.set_fittocontents("both");
                p.sta03.set_cssclass("sta_WF_Txt40014");
                p.sta03.set_textAlign("right");
                p.sta03.move("69.00","9","115","18",null,null);

                p.PanelTelL.set_taborder("20");
                p.PanelTelL.set_flexcrossaxisalign("start");
                p.PanelTelL.set_horizontalgap("5");
                p.PanelTelL.set_type("vertical");
                p.PanelTelL.set_verticalgap("5");
                p.PanelTelL.set_fittocontents("height");
                p.PanelTelL.set_flexgrow("1");
                p.PanelTelL.move("80.00","118","640","60",null,null);

                p.PanelTelR.set_taborder("15");
                p.PanelTelR.set_flexcrossaxisalign("end");
                p.PanelTelR.set_horizontalgap("0");
                p.PanelTelR.set_flexmainaxisalign("start");
                p.PanelTelR.set_verticalgap("5");
                p.PanelTelR.set_type("vertical");
                p.PanelTelR.set_fittocontents("height");
                p.PanelTelR.set_flexgrow("1");
                p.PanelTelR.move("888.5","412","640","60",null,null);

                p.Panel02.set_taborder("16");
                p.Panel02.set_flexmainaxisalign("end");
                p.Panel02.set_flexcrossaxisalign("center");
                p.Panel02.set_horizontalgap("14");
                p.Panel02.move("1120.00","441","300","45",null,null);

                p.PanelTTel.set_taborder("17");
                p.PanelTTel.set_spacing("20px 20px");
                p.PanelTTel.set_flexmainaxisalign("center");
                p.PanelTTel.set_flexwrap("wrap");
                p.PanelTTel.set_fittocontents("height");
                p.PanelTTel.set_verticalgap("15");
                p.PanelTTel.set_flexcrossaxiswrapalign("spacebetween");
                p.PanelTTel.move("0","Panel00:0","100.00%","175",null,null);

                p.sta00_02.set_taborder("18");
                p.sta00_02.set_text("인천국제공항 입주자서비스 플랫폼");
                p.sta00_02.set_fittocontents("width");
                p.sta00_02.set_cssclass("sta_WF_Txt50014");
                p.sta00_02.move("10.00","10","216","20",null,null);

                p.sta00_01_01.set_taborder("19");
                p.sta00_01_01.set_text("T1 032-741-3301~2");
                p.sta00_01_01.set_cssclass("sta_WF_TxtBlack");
                p.sta00_01_01.set_usedecorate("true");
                p.sta00_01_01.set_fittocontents("width");
                p.sta00_01_01.move("10.00","38","150","16",null,null);

                p.Panel04.set_taborder("21");
                p.Panel04.set_flexcrossaxisalign("center");
                p.Panel04.set_fittocontents("width");
                p.Panel04.set_horizontalgap("10");
                p.Panel04.set_flexwrap("wrap");
                p.Panel04.set_verticalgap("10");
                p.Panel04.move("0","59","100%","20",null,null);

                p.PanelEnd.set_taborder("23");
                p.PanelEnd.set_spacing("20px 20px");
                p.PanelEnd.set_border("1px solid #e8e8e8,0px none,0px none");
                p.PanelEnd.set_flexmainaxisalign("start");
                p.PanelEnd.set_flexwrap("wrap");
                p.PanelEnd.set_fittocontents("height");
                p.PanelEnd.set_flexcrossaxiswrapalign("start");
                p.PanelEnd.set_verticalgap("15");
                p.PanelEnd.move("0","PanelTTel:0","100.00%","132",null,null);

                p.PanelCopy.set_taborder("24");
                p.PanelCopy.set_type("horizontal");
                p.PanelCopy.set_flexmainaxisalign("start");
                p.PanelCopy.set_fittocontents("height");
                p.PanelCopy.move("77.00","16","100%","46",null,null);

                p.PanelLink.set_taborder("25");
                p.PanelLink.set_flexcrossaxisalign("start");
                p.PanelLink.set_type("horizontal");
                p.PanelLink.set_flexmainaxisalign("end");
                p.PanelLink.set_flexgrow("0");
                p.PanelLink.set_flexcrossaxiswrapalign("start");
                p.PanelLink.move("887","198","100%","45",null,null);

                p.staBlank.set_taborder("26");
                p.staBlank.move("115","265","20","10",null,null);

                p.sta03_00.set_taborder("14");
                p.sta03_00.set_text("(24 시간운영)");
                p.sta03_00.set_cssclass("sta_WF_Txt60012, sta_WF_Txt72");
                p.sta03_00.set_textAlign("right");
                p.sta03_00.move("1190.00","433","100","45",null,null);

                p.sta04.set_taborder("12");
                p.sta04.set_text("1577-2600");
                p.sta04.set_cssclass("sta_WF_Txt60036");
                p.sta04.set_textAlign("right");
                p.sta04.set_fittocontents("width");
                p.sta04.move("sta03_00:0","411","186","45",null,null);

                p.staCopy.set_taborder("10");
                p.staCopy.set_text("(22382) 인천광역시 중구 공항로 424번길 47 인천국제공항공사\r\nCopyright Incheon International Arport Corporation. All rights reserved.");
                p.staCopy.set_cssclass("sta_WF_Txt40014, sta_WF_Txt72");
                p.staCopy.set_verticalAlign("top");
                p.staCopy.set_fittocontents("height");
                p.staCopy.set_flexgrow("0");
                p.staCopy.move("80.00","215","100%","46",null,null);

                p.cbo00.set_taborder("13");
                p.cbo00.set_tooltiptext("관련사이트");
                p.cbo00.set_text("관련사이트");
                p.cbo00.set_value("관련사이트");
                p.cbo00.set_index("-1");
                p.cbo00.move("764","455","200","45",null,null);
            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("frm_Bottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
