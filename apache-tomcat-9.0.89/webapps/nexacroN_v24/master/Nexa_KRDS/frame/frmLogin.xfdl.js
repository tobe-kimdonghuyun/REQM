(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Login");
            this.set_titletext("로그인");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1510);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","10",null,"23","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("대한민국 디지털정부 사용자 로그인");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static00:16",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("로그인 방식을 선택해주세요.");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","Static01:24",null,"87","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("통합 로그인을 사용해 보세요. 통합 로그인은 한 번의 회원가입과 로그인으로 연계된 모든 공공 서비스를 이용할 수 있는 인증 서비스입니다. \r\n한 번 로그인으로 모든 정부기관의 서비스를 이용하실 수 있습니다. ");
            obj.set_cssclass("sta_WF_Para19RLeft");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","154","266","170","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("통합 로그인 사용");
            obj.set_cssclass("chk_WF_Switch");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01_01","336","266","222","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("키보드 보안 프로그램 사용");
            obj.set_cssclass("chk_WF_Switch");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","543","266","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_HelpEx");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","182","259","270","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Static02:48",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_verticalgap("16");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","476","1508","282","90",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("한번에 본인인증하고\r\n모든 서비스 이용하기");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Div("Div03_01","830","1508","100%","201",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div03");
            obj.set_cssclass("div_WF_LoginOpt");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","31","31",null,"40","31",null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("0");
            obj.set_text("모바일 신분증");
            obj.set_cssclass("btn_WF_LoginOpt01");
            obj.set_accessibilityrole("heading4");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Static("Static04","95","84",null,"52","71",null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("1");
            obj.set_text("행정안전부에서 제공하는 모바일 신분증 앱을 이용하여 로그인하기");
            obj.set_cssclass("sta_WF_aliTop");
            obj.set_fittocontents("height");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Button("Button00","95","144",null,"26","71",null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("2");
            obj.set_text("모바일 신분증 발급하러 가기");
            obj.set_cssclass("btn_WF_More");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Static("Static03","40","Button00:0","119","31",null,null,null,null,null,null,this.Div03_01.form);
            obj.set_taborder("3");
            obj.set_accessibilityenable("false");
            this.Div03_01.addChild(obj.name, obj);

            obj = new Div("Div03_02","830","1725","100%","193",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div03");
            obj.set_cssclass("div_WF_LoginOpt");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","31","31",null,"40","31",null,null,null,null,null,this.Div03_02.form);
            obj.set_taborder("0");
            obj.set_text("공동·금융 인증서");
            obj.set_cssclass("btn_WF_LoginOpt02");
            obj.set_accessibilityrole("heading4");
            this.Div03_02.addChild(obj.name, obj);

            obj = new Static("Static04","95","84",null,"78","71",null,null,null,null,null,this.Div03_02.form);
            obj.set_taborder("1");
            obj.set_text("별도로 은행같은 금융기관이나 공식인증기관에서 발급받은 전자서명용 공인인증서 또는 금융 인증서를 이용하여 로그인하기");
            obj.set_flexgrow("1");
            obj.set_cssclass("sta_WF_aliTop");
            obj.set_fittocontents("height");
            this.Div03_02.addChild(obj.name, obj);

            obj = new Static("Static03","40","Static04:0","119","31",null,null,null,null,null,null,this.Div03_02.form);
            obj.set_taborder("2");
            obj.set_accessibilityenable("false");
            this.Div03_02.addChild(obj.name, obj);

            obj = new Div("Div03_03","830","1934","100%","227",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div03");
            obj.set_cssclass("div_WF_LoginOpt");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","31","31",null,"40","31",null,null,null,null,null,this.Div03_03.form);
            obj.set_taborder("0");
            obj.set_text("간편 인증");
            obj.set_cssclass("btn_WF_LoginOpt03");
            obj.set_accessibilityrole("heading4");
            this.Div03_03.addChild(obj.name, obj);

            obj = new Static("Static04","95","84",null,"78","71",null,null,null,null,null,this.Div03_03.form);
            obj.set_taborder("1");
            obj.set_text("네이버, 카카오, 또는 금융기관등 민간 전자서명 사업자가 제공하는 전자서명을 이용하여 로그인하기");
            obj.set_cssclass("sta_WF_aliTop");
            obj.set_fittocontents("height");
            this.Div03_03.addChild(obj.name, obj);

            obj = new Button("Button02","95","Static04:8",null,"26","31",null,null,null,null,null,this.Div03_03.form);
            obj.set_taborder("2");
            obj.set_text("이용 가능한 간편 인증 서비스 목록보기");
            obj.set_cssclass("btn_WF_DiscExpand");
            obj.set_fittocontents("height");
            this.Div03_03.addChild(obj.name, obj);

            obj = new Static("Static03","141","Button02:0","119","31",null,null,null,null,null,null,this.Div03_03.form);
            obj.set_taborder("3");
            obj.set_accessibilityenable("false");
            this.Div03_03.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","830","1508","486","653",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Div03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Div03_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Div03_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","0","Panel01:40",null,"701","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            obj.set_cssclass("pnl_WF_Loginbox");
            obj.set_flexwrap("wrap");
            obj.set_spacing("23px 0px 23px 0px ");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","23","330","90",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("간단히 로그인하고\n필요시 본인인증하기");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Div("Div03_03_00","353","Panel01_00:24","534","168",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Div03");
            obj.set_cssclass("div_WF_LoginOpt");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","31","31",null,"40","31",null,null,null,null,null,this.Div03_03_00.form);
            obj.set_taborder("0");
            obj.set_text("소셜(SNS)계정으로 로그인");
            obj.set_cssclass("btn_WF_LoginOpt04");
            obj.set_accessibilityrole("heading4");
            this.Div03_03_00.addChild(obj.name, obj);

            obj = new Static("Static04","95","84",null,"52","71",null,null,null,null,null,this.Div03_03_00.form);
            obj.set_taborder("1");
            obj.set_text("네이버, 카카오, 페이코 계정 등 자주 사용하는 소셜·포털사이트 계정으로 로그인하기");
            obj.set_cssclass("sta_WF_aliTop");
            obj.set_fittocontents("height");
            this.Div03_03_00.addChild(obj.name, obj);

            obj = new Static("Static03","141","Static04:0","119","31",null,null,null,null,null,null,this.Div03_03_00.form);
            obj.set_taborder("2");
            obj.set_accessibilityenable("false");
            this.Div03_03_00.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","Panel01_00:0",null,"214","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_flexwrap("wrap");
            obj.set_spacing("23px 0px 23px 0px ");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            obj.set_cssclass("pnl_WF_LoginboxB");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/><PanelItem id=\"PanelItem01\" componentid=\"Div03_03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Panel00:40",null,"185","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_StartInfor");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","24","16",null,"26","24",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("로그인에 어려움이 있으신가요?");
            obj.set_cssclass("sta_WF_InforboxBL");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_06","51","Static00:12",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("⦁   이전에 이용한 로그인 수단이 안 보인다면 상단 통합 로그인 사용을 꺼보세요.");
            obj.set_cssclass("sta_WF_TxtlstLv01");
            obj.set_fittocontents("height");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_06_00","51","Static03_06:0",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("⦁   로그인 관련 도움말이나 다른 사용자가 자주 찾는 질문을 확인해보세요.");
            obj.set_cssclass("sta_WF_TxtlstLv01");
            obj.set_fittocontents("height");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03_06_00_00","51","Static03_06_00:0",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_TxtlstLv01");
            obj.set_fittocontents("height");
            obj.set_text("⦁   02-3703-2500 (내선번호 4번)으로 전화주세요. 서비스에 로그인할 수 있도록 도와드리겠습니다.");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","140","Static03_06_00_00:0","119","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div03_01.form
            obj = new Layout("default","",0,0,this.Div03_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button01.set_taborder("0");
                p.Button01.set_text("모바일 신분증");
                p.Button01.set_cssclass("btn_WF_LoginOpt01");
                p.Button01.set_accessibilityrole("heading4");
                p.Button01.move("31","31",null,"40","31",null);

                p.Static04.set_taborder("1");
                p.Static04.set_text("행정안전부에서 제공하는 모바일 신분증 앱을 이용하여 로그인하기");
                p.Static04.set_cssclass("sta_WF_aliTop");
                p.Static04.set_fittocontents("height");
                p.Static04.move("95","84",null,"52","71",null);

                p.Button00.set_taborder("2");
                p.Button00.set_text("모바일 신분증 발급하러 가기");
                p.Button00.set_cssclass("btn_WF_More");
                p.Button00.move("95","144",null,"26","71",null);

                p.Static03.set_taborder("3");
                p.Static03.set_accessibilityenable("false");
                p.Static03.move("40","Button00:0","119","31",null,null);
            	}
            );
            this.Div03_01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03_01.form
            obj = new Layout("Layout0","",0,0,this.Div03_01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button01.move("24","24",null,"40","24",null);

                p.Static04.move("24","Button01:8",null,"52","24",null);

                p.Button00.move("24","Static04:8",null,"26","24",null);

                p.Static03.move("40","Button00:0","119","24",null,null);
            	}
            );
            this.Div03_01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03_02.form
            obj = new Layout("default","",0,0,this.Div03_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button01.set_taborder("0");
                p.Button01.set_text("공동·금융 인증서");
                p.Button01.set_cssclass("btn_WF_LoginOpt02");
                p.Button01.set_accessibilityrole("heading4");
                p.Button01.move("31","31",null,"40","31",null);

                p.Static04.set_taborder("1");
                p.Static04.set_text("별도로 은행같은 금융기관이나 공식인증기관에서 발급받은 전자서명용 공인인증서 또는 금융 인증서를 이용하여 로그인하기");
                p.Static04.set_flexgrow("1");
                p.Static04.set_cssclass("sta_WF_aliTop");
                p.Static04.set_fittocontents("height");
                p.Static04.move("95","84",null,"78","71",null);

                p.Static03.set_taborder("2");
                p.Static03.set_accessibilityenable("false");
                p.Static03.move("40","Static04:0","119","31",null,null);
            	}
            );
            this.Div03_02.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03_02.form
            obj = new Layout("Layout0","",0,0,this.Div03_02.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button01.move("24","24",null,"40","24",null);

                p.Static04.move("24","Button01:8","432","54",null,null);

                p.Static03.move("24","Static04:0","119","24",null,null);
            	}
            );
            this.Div03_02.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03_03.form
            obj = new Layout("default","",0,0,this.Div03_03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button01.set_taborder("0");
                p.Button01.set_text("간편 인증");
                p.Button01.set_cssclass("btn_WF_LoginOpt03");
                p.Button01.set_accessibilityrole("heading4");
                p.Button01.move("31","31",null,"40","31",null);

                p.Static04.set_taborder("1");
                p.Static04.set_text("네이버, 카카오, 또는 금융기관등 민간 전자서명 사업자가 제공하는 전자서명을 이용하여 로그인하기");
                p.Static04.set_cssclass("sta_WF_aliTop");
                p.Static04.set_fittocontents("height");
                p.Static04.move("95","84",null,"78","71",null);

                p.Button02.set_taborder("2");
                p.Button02.set_text("이용 가능한 간편 인증 서비스 목록보기");
                p.Button02.set_cssclass("btn_WF_DiscExpand");
                p.Button02.set_fittocontents("height");
                p.Button02.move("95","Static04:8",null,"26","31",null);

                p.Static03.set_taborder("3");
                p.Static03.set_accessibilityenable("false");
                p.Static03.move("141","Button02:0","119","31",null,null);
            	}
            );
            this.Div03_03.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03_03.form
            obj = new Layout("Layout0","",0,0,this.Div03_03.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button02.set_fittocontents("height");
                p.Button02.move("24","Static04:8",null,"26","24",null);

                p.Button01.move("24","24",null,"40","24",null);

                p.Static04.set_text("네이버, 카카오, 또는 금융기관등 민간 전자서명 사업자가 제공하는 전자서명을 이용하여 로그인하기");
                p.Static04.move("24","Button01:8",null,"54","24",null);

                p.Static03.move("24","Button02:0","119","24",null,null);
            	}
            );
            this.Div03_03.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div03_03_00.form
            obj = new Layout("default","",0,0,this.Div03_03_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button01.set_taborder("0");
                p.Button01.set_text("소셜(SNS)계정으로 로그인");
                p.Button01.set_cssclass("btn_WF_LoginOpt04");
                p.Button01.set_accessibilityrole("heading4");
                p.Button01.move("31","31",null,"40","31",null);

                p.Static04.set_taborder("1");
                p.Static04.set_text("네이버, 카카오, 페이코 계정 등 자주 사용하는 소셜·포털사이트 계정으로 로그인하기");
                p.Static04.set_cssclass("sta_WF_aliTop");
                p.Static04.set_fittocontents("height");
                p.Static04.move("95","84",null,"52","71",null);

                p.Static03.set_taborder("2");
                p.Static03.set_accessibilityenable("false");
                p.Static03.move("141","Static04:0","119","31",null,null);
            	}
            );
            this.Div03_03_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div03_03_00.form
            obj = new Layout("Layout0","",0,0,this.Div03_03_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button02.set_fittocontents("height");
                p.Button02.move("24","Static04:8",null,"26","24",null);

                p.Button01.move("24","24",null,"40","24",null);

                p.Static04.set_text("네이버, 카카오, 또는 금융기관등 민간 전자서명 사업자가 제공하는 전자서명을 이용하여 로그인하기");
                p.Static04.move("24","Button01:8",null,"54","24",null);

                p.Static03.move("24","Button02:0","119","24",null,null);
            	}
            );
            this.Div03_03_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1510,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLogin.xfdl", function() {

        this.Form_Login_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Login_onload,this);
            this.Div00.form.Static03_06.addEventHandler("onclick",this.Static03_06_onclick,this);
            this.Div00.form.Static03_06_00.addEventHandler("onclick",this.Static03_06_onclick,this);
            this.Div00.form.Static03_06_00_00.addEventHandler("onclick",this.Static03_06_onclick,this);
        };
        this.loadIncludeScript("frmLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
