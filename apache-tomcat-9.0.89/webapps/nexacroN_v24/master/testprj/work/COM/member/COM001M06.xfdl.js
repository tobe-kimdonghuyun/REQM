(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM001M06");
            this.set_titletext("회원탈퇴");
            if (Form == this.constructor)
            {
                this._setFormPosition(1480,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGet", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userNm\" type=\"STRING\" size=\"256\"/><Column id=\"whdwlRsn\" type=\"STRING\" size=\"256\"/><Column id=\"whdwlAgreYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"whdwlAgreYn\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divForm","20","0",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_visible("true");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","-14","48","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("2");
            obj.set_text("회원탈퇴");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("btnMinMbrWhdwl","1436","718","34","34",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ACMinus");
            obj.set_visible("true");
            obj.set_text("");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("Panel01","675","48","100%","50",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("4");
            obj.set_cssclass("pal_WF_TitBtnBg");
            obj.set_spacing("0px 20px");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnMinMbrWhdwl\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Panel("sub_tit01","-14","28","100%","70",null,null,null,null,"70",null,this.divForm.form);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divForm.addChild(obj.name, obj);

            obj = new Div("Div01","50.00","478","100.00%","641",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Bg");
            obj.set_fittocontents("height");
            this.divForm.addChild(obj.name, obj);

            obj = new Static("staLabel01_00_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("입주자서비스포털 회원탈퇴시 유의사항 안내");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new TextArea("txa00_00","200.00","728","100.00%","120",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("6");
            obj.set_value("· 현재 신청 진행중인 건이 있을 경우는 탈퇴 하실 수 없습니다. \n· 입주자지원센터로 연락 주시기 바랍니다(032-741-3301~2)\n· 회원탈퇴를 신청 하시면 그 즉시 탈퇴하실 수 있습니다.\n· 탈퇴 후 회원님의 개인정보는 입주자서비스포털의 개인정보보호정책에 따라 삭제되며 회원님의 어떠한 정보도 보관하지 않습니다.\n· 회원탈퇴 후 재가입 가능하나 기존 사용하신 아이디는 사용하실 수 없습니다.");
            obj.set_dragscrolltype("vert");
            obj.set_readonly("true");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_01_00","10.00","98","100%","166",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("7");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"txa00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01","0","60","100.00%","177",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("8");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexshrink("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("사용자ID");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_01","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel00_01","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt00_00","10.00","158","100%","40",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_text("");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_02","10.00","98","305","86",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("1");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"edt00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan00_03","10.00","98","305","1",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("13");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents/>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan02","0","60","100.00%","96",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("0");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"pan00_02\"/><PanelItem id=\"PanelItem03\" componentid=\"pan00_03\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_00","0","60","100.00%","330",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("20");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("0");
            obj.set_spacing("0px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"pan01_01\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Static("staLabel01_00","10","98","100%","46",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("14");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("EditDiv00","138","302","100%","280",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_url("work::COM/util/editor/editor.xfdl");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan01_01","10.00","98","100%","330",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLabel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"EditDiv00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new CheckBox("chk00_00","200.00","128","290","36",null,null,"24",null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("위 내용을 모두 확인하였고, 동의하며\r\n회원탈퇴를 계속 진행하겠습니다.(필수)");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_value("Y");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Panel("pan04","-1","854","100.00%","38",null,null,null,null,null,null,this.divForm.form.Div01.form);
            obj.set_taborder("17");
            obj.set_fittocontents("height");
            obj.set_verticalgap("0");
            obj.set_spacing("10px 20px 10px 20px");
            obj.set_cssclass("pal_WF_DtlBg");
            obj.set_flexmainaxisalign("center");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"chk00_00\"/></Contents>");
            this.divForm.form.Div01.addChild(obj.name, obj);

            obj = new Div("divPopBtn","0","1540","99.99577482641578%","60",null,null,null,null,null,null,this.divForm.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_PopBtn");
            this.divForm.addChild(obj.name, obj);

            obj = new Button("Button00_00","789.97","10","100","40",null,null,null,null,null,null,this.divForm.form.divPopBtn.form);
            obj.set_taborder("0");
            obj.set_text("탈퇴하기");
            obj.set_cssclass("btn_WF_Yes");
            obj.set_fittocontents("width");
            this.divForm.form.divPopBtn.addChild(obj.name, obj);

            obj = new Div("divGuide00","1600.00","145","450","385",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("false");
            obj.set_cssclass("div_GD_Tip");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","20.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ACPlus");
            obj.set_visible("false");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","64.00","205","34","34",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_ACMinus");
            this.divGuide00.addChild(obj.name, obj);

            obj = new Static("sta00_00","20.00","255","375","50",null,null,null,null,null,null,this.divGuide00.form);
            obj.set_taborder("2");
            obj.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
            this.divGuide00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm.form.Div01.form.EditDiv00
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form.EditDiv00.form,function(p){});
            this.divForm.form.Div01.form.EditDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divForm.form.Div01.form
            obj = new Layout("default","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLabel01_00_00.set_taborder("5");
                p.staLabel01_00_00.set_text("입주자서비스포털 회원탈퇴시 유의사항 안내");
                p.staLabel01_00_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00_00.move("10","98","100%","46",null,null);

                p.txa00_00.set_taborder("6");
                p.txa00_00.set_value("· 현재 신청 진행중인 건이 있을 경우는 탈퇴 하실 수 없습니다. \n· 입주자지원센터로 연락 주시기 바랍니다(032-741-3301~2)\n· 회원탈퇴를 신청 하시면 그 즉시 탈퇴하실 수 있습니다.\n· 탈퇴 후 회원님의 개인정보는 입주자서비스포털의 개인정보보호정책에 따라 삭제되며 회원님의 어떠한 정보도 보관하지 않습니다.\n· 회원탈퇴 후 재가입 가능하나 기존 사용하신 아이디는 사용하실 수 없습니다.");
                p.txa00_00.set_dragscrolltype("vert");
                p.txa00_00.set_readonly("true");
                p.txa00_00.move("200.00","728","100.00%","120",null,null);

                p.pan01_01_00.set_taborder("7");
                p.pan01_01_00.set_type("vertical");
                p.pan01_01_00.set_flexgrow("1");
                p.pan01_01_00.move("10.00","98","100%","166",null,null);

                p.pan01.set_taborder("8");
                p.pan01.set_horizontalgap("20");
                p.pan01.set_flexcrossaxiswrapalign("start");
                p.pan01.set_flexwrap("wrap");
                p.pan01.set_verticalgap("0");
                p.pan01.set_spacing("0px 20px 10px 20px");
                p.pan01.set_cssclass("pal_WF_DtlBg");
                p.pan01.set_flexshrink("1");
                p.pan01.set_fittocontents("height");
                p.pan01.move("0","60","100.00%","177",null,null);

                p.staLabel00.set_taborder("9");
                p.staLabel00.set_text("사용자ID");
                p.staLabel00.set_cssclass("sta_WF_Label");
                p.staLabel00.move("10","98","100%","46",null,null);

                p.edt00.set_taborder("10");
                p.edt00.set_readonly("true");
                p.edt00.move("10.00","158","100%","40",null,null);

                p.pan00_01.set_taborder("11");
                p.pan00_01.set_type("vertical");
                p.pan00_01.set_flexgrow("1");
                p.pan00_01.set_minwidth("");
                p.pan00_01.move("10.00","98","305","86",null,null);

                p.staLabel00_01.set_taborder("12");
                p.staLabel00_01.set_text("성명");
                p.staLabel00_01.set_cssclass("sta_WF_Label");
                p.staLabel00_01.move("10","98","100%","46",null,null);

                p.edt00_00.set_taborder("2");
                p.edt00_00.set_readonly("false");
                p.edt00_00.move("10.00","158","100%","40",null,null);

                p.pan00_02.set_taborder("1");
                p.pan00_02.set_type("vertical");
                p.pan00_02.set_flexgrow("1");
                p.pan00_02.set_minwidth("");
                p.pan00_02.move("10.00","98","305","86",null,null);

                p.pan00_03.set_taborder("13");
                p.pan00_03.set_type("vertical");
                p.pan00_03.set_flexgrow("1");
                p.pan00_03.move("10.00","98","305","1",null,null);

                p.pan02.set_taborder("0");
                p.pan02.set_horizontalgap("20");
                p.pan02.set_flexcrossaxiswrapalign("start");
                p.pan02.set_flexwrap("wrap");
                p.pan02.set_fittocontents("height");
                p.pan02.set_verticalgap("0");
                p.pan02.set_spacing("0px 20px 10px 20px");
                p.pan02.set_cssclass("pal_WF_DtlBg");
                p.pan02.move("0","60","100.00%","96",null,null);

                p.pan01_00.set_taborder("16");
                p.pan01_00.set_horizontalgap("20");
                p.pan01_00.set_flexcrossaxiswrapalign("start");
                p.pan01_00.set_flexwrap("wrap");
                p.pan01_00.set_verticalgap("0");
                p.pan01_00.set_spacing("0px 20px 10px 20px");
                p.pan01_00.set_cssclass("pal_WF_DtlBg");
                p.pan01_00.set_fittocontents("height");
                p.pan01_00.move("0","60","100.00%","330",null,null);

                p.staLabel01_00.set_taborder("14");
                p.staLabel01_00.set_text("내용");
                p.staLabel01_00.set_cssclass("sta_WF_Label");
                p.staLabel01_00.move("10","98","100%","46",null,null);

                p.EditDiv00.set_taborder("3");
                p.EditDiv00.set_text("Div00");
                p.EditDiv00.set_url("work::COM/util/editor/editor.xfdl");
                p.EditDiv00.move("138","302","100%","280",null,null);

                p.pan01_01.set_taborder("15");
                p.pan01_01.set_type("vertical");
                p.pan01_01.set_flexgrow("1");
                p.pan01_01.set_fittocontents("height");
                p.pan01_01.move("10.00","98","100%","330",null,null);

                p.chk00_00.set_taborder("4");
                p.chk00_00.set_text("위 내용을 모두 확인하였고, 동의하며\r\n회원탈퇴를 계속 진행하겠습니다.(필수)");
                p.chk00_00.set_truevalue("Y");
                p.chk00_00.set_falsevalue("N");
                p.chk00_00.set_minwidth("24");
                p.chk00_00.set_maxwidth("");
                p.chk00_00.set_value("Y");
                p.chk00_00.move("200.00","128","290","36",null,null);

                p.pan04.set_taborder("17");
                p.pan04.set_fittocontents("height");
                p.pan04.set_verticalgap("0");
                p.pan04.set_spacing("10px 20px 10px 20px");
                p.pan04.set_cssclass("pal_WF_DtlBg");
                p.pan04.set_flexmainaxisalign("center");
                p.pan04.set_flexcrossaxisalign("center");
                p.pan04.set_horizontalgap("10");
                p.pan04.move("-1","854","100.00%","38",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.Div01.form
            obj = new Layout("mobile","",0,0,this.divForm.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("default","",0,0,this.divForm.form.divPopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("0");
                p.Button00_00.set_text("탈퇴하기");
                p.Button00_00.set_cssclass("btn_WF_Yes");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.move("789.97","10","100","40",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form.divPopBtn.form
            obj = new Layout("mobile","",0,0,this.divForm.form.divPopBtn.form,
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
            obj.set_horizontalgap("10");
            obj.set_spacing("0px 10px 0px 10px");
            this.divForm.form.divPopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divForm.form
            obj = new Layout("default","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staSubTitle01.set_taborder("2");
                p.staSubTitle01.set_text("회원탈퇴");
                p.staSubTitle01.set_cssclass("sta_WF_SubTitle");
                p.staSubTitle01.move("-14","48","100%","50",null,null);

                p.btnMinMbrWhdwl.set_taborder("3");
                p.btnMinMbrWhdwl.set_cssclass("btn_WF_ACMinus");
                p.btnMinMbrWhdwl.set_visible("true");
                p.btnMinMbrWhdwl.set_text("");
                p.btnMinMbrWhdwl.move("1436","718","34","34",null,null);

                p.Panel01.set_taborder("4");
                p.Panel01.set_cssclass("pal_WF_TitBtnBg");
                p.Panel01.set_spacing("0px 20px");
                p.Panel01.set_horizontalgap("10");
                p.Panel01.set_flexcrossaxisalign("center");
                p.Panel01.set_flexmainaxisalign("end");
                p.Panel01.move("675","48","100%","50",null,null);

                p.sub_tit01.set_taborder("5");
                p.sub_tit01.set_background("#ffffff");
                p.sub_tit01.set_flexcrossaxisalign("end");
                p.sub_tit01.set_minheight("70");
                p.sub_tit01.set_maxheight("");
                p.sub_tit01.move("-14","28","100%","70",null,null);

                p.Div01.set_taborder("0");
                p.Div01.set_text("Div00");
                p.Div01.set_cssclass("div_WF_Bg");
                p.Div01.set_fittocontents("height");
                p.Div01.move("50.00","478","100.00%","641",null,null);

                p.divPopBtn.set_taborder("1");
                p.divPopBtn.set_text("Div00");
                p.divPopBtn.set_cssclass("div_WF_PopBtn");
                p.divPopBtn.move("0","1540","99.99577482641578%","60",null,null);
            	}
            );
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divForm.form
            obj = new Layout("mobile","",0,0,this.divForm.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_type("vertical");
            this.divForm.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divGuide00.form
            obj = new Layout("default","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00_00.set_taborder("0");
                p.Button00_00.set_cssclass("btn_WF_ACPlus");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("20.00","205","34","34",null,null);

                p.Button00_00_00.set_taborder("1");
                p.Button00_00_00.set_cssclass("btn_WF_ACMinus");
                p.Button00_00_00.move("64.00","205","34","34",null,null);

                p.sta00_00.set_taborder("2");
                p.sta00_00.set_text("접혀있을때 class : btn_WF_ACPlus 로 접음");
                p.sta00_00.move("20.00","255","375","50",null,null);
            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide00.form
            obj = new Layout("mobile","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divGuide00.form
            obj = new Layout("mobile","",0,0,this.divGuide00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divGuide00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,Phone_screen",1480,800,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("회원탈퇴");

                p.divForm.set_taborder("0");
                p.divForm.set_text("div00");
                p.divForm.set_visible("true");
                p.divForm.set_fittocontents("height");
                p.divForm.move("20","0",null,null,"20","0");

                p.divGuide00.set_taborder("1");
                p.divGuide00.set_text("div00");
                p.divGuide00.set_visible("false");
                p.divGuide00.set_cssclass("div_GD_Tip");
                p.divGuide00.move("1600.00","145","450","385",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("mobile","",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divForm.move("20","60",null,"1122","20",null);
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divForm.form.Div01.form.edt00","value","dsGet","userId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divForm.form.Div01.form.edt00_00","value","dsGet","userNm");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divForm.form.Div01.form.chk00_00","value","dsGet","whdwlAgreYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","work::COM/util/editor/editor.xfdl");
        };
        
        // User Script
        this.registerScript("COM001M06.xfdl", function() {
        /********************************************************************
            created:	  2024/08/08
            filename: 	C:\developer\tsp_view\publishing\work\LIF\test.xfdl
            file path:	C:\developer\tsp_view\publishing\work\LIF
            file base: 	test
            file ext:	  xfdl
            author:

            purpose:
        *********************************************************************/

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
        this.objApp = nexacro.getApplication();
        this.param;
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
        			"id" : this.getOwnerFrame().id
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
        this.cfnClose = function()
        {
        	console.log('cfnClose');
        }
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 데이터 저장
        this.saveTransaction = function()
        {
        	var strSvcId    = "save";
        	var strSvcUrl   = "member/mbrWhdwlStrg.do";
        	var inData      = "dsGet=dsGet";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	var isAsync   	= false;

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, callBackFnc, isAsync);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0)
        	{
        		return;
        	}

        	switch(svcID)
        	{
        		case "save" :
        			var gvRetMsg = this.objApp.getVariable("gvRetMsg");
        			this.gfnAlertMsg("save", gvRetMsg, "msgCallback");

        			if(this.opener) {
        				this.close();
        			} else {
        				var cMenuId = this.objApp.gvFrmLeft.form.currsMenuId;
        				this.gfnCloseMenu(cMenuId);
        			}

        			break;
        	}
        };

        /**
        	sPopupId	// 페세지창을 구분하기 위한 ID
        	sRtn		// 메세지창에서 리턴 해주는 변수값 (JSON 형태의 스트링 리턴)
        **/
        this.msgCallback = function(sPopupId, sRtn)
        {
        	var oRtn = JSON.parse(sRtn);
        	if(sPopupId == "save_confirm") {
        		if(oRtn.result == "Y") {
        			this.divForm.form.Div01.form.EditDiv00.form.readData(this.formGetData, this);
        		}
        	}
        };

        /* ck에디터에서 불러올때 콜백 펑션 */
        this.formGetData = function(thisObj, allData) {
        	var content = JSON.parse(allData).CONTENT;
        	thisObj.dsGet.setColumn(0, "whdwlRsn", content);
        	thisObj.saveTransaction();
        }
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function()
        {
        	var obj = {
        		filebrowserImageUploadUrl: '/common/insertImageCk.do', // 파일 업로드를 처리 할 경로 설정.
        		height: 200,
        		width: 800,
        		toolbar: [['Source'], ['Bold', 'Italic', 'Underline', 'Strike'], ['Image', 'Table', 'HorizontalRule'], ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'],	['Font', 'FontSize'], ['TextColor', 'BGColor']],
        		removePlugins: 'resize',
        	};

        	this.divForm.form.Div01.form.EditDiv00.form.fnInit(obj);

        	if(this.param != null && this.param.id != null && this.param.id != '') {
        		this.dsGet.setColumn(0, "userId", this.param.id);
        	}
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divForm_divPopBtn_Button00_00_onclick = function(obj,e)
        {
        	var whdwlAgreYn = this.dsGet.getColumn(0, "whdwlAgreYn");

        	if(!this.gfnIsNull(whdwlAgreYn) && whdwlAgreYn == "Y") {
         		this.gfnConfirmMsg("save_confirm", "MSG_003", "msgCallback", ["확인", "취소"], ["Y", "N"]);
         	} else {
        		this.gfnAlertMsg("msg", "MSG_011", ["탈퇴 동의 체크는 필수 항목입니다."]);
        	}
        };

        this.btnMin_onclick = function(obj,e)
        {
        	var objNm = obj.name;
        	var objClass = obj.cssclass;
        	var objDiv = null;
        	var divVisible = false;

        	// 해당 div 찾아줌.
        	if(objNm == "btnMinMbrWhdwl") {
        		objDiv = this.divForm.form.Div01;
        	} else{
        		return;
        	}

        	if (objClass == "btn_WF_ACMinus") { // - 버튼 일때
        		divVisible = false; // visible 세팅
        		obj.cssclass = "btn_WF_ACPlus"; // 클래스 수정
        	} else if (objClass == "btn_WF_ACPlus") { // + 버튼 일때
        		divVisible = true; // visible 세팅
        		obj.cssclass = "btn_WF_ACMinus";
        	}

        	objDiv.visible = divVisible;
        	this.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divForm.form.btnMinMbrWhdwl.addEventHandler("onclick",this.btnMin_onclick,this);
            this.divForm.form.Div01.form.txa00_00.addEventHandler("onchanged",this.divForm_Div01_txa00_00_onchanged,this);
            this.divForm.form.divPopBtn.form.Button00_00.addEventHandler("onclick",this.divForm_divPopBtn_Button00_00_onclick,this);
        };
        this.loadIncludeScript("COM001M06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
