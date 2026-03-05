(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testMain1");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","80","168","805","350",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("frame::frm_MainImg.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divLogin","865","0","415","350",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_cssclass("div_MF_LoginBox02");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staLogo","146.00","36","100%","77",null,null,null,null,"50",null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MF_Logo");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("staLoginUser","74.00","72","100%","40",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("11");
            obj.set_text("홍길동님");
            obj.set_cssclass("sta_MF_LoginUser");
            obj.set_visible("true");
            this.divLogin.addChild(obj.name, obj);

            obj = new Panel("panBtnMy","147","101","100%","40",null,null,null,null,"40",null,this.divLogin.form);
            obj.set_taborder("14");
            obj.set_horizontalgap("16");
            obj.set_flexmainaxisalign("center");
            obj.set_visible("true");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button02\"/></Contents>");
            this.divLogin.addChild(obj.name, obj);

            obj = new Panel("Panel00","58","143","100%","80",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staLoginUser\"/><PanelItem id=\"PanelItem02\" componentid=\"panBtnMy\"/></Contents>");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("Button01","165","120","90","34",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("12");
            obj.set_text("나의 정보");
            obj.set_cssclass("btn_MF_LoginTxt");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("Button02","299","136","103","34",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("13");
            obj.set_text("나의 할일 (10)");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_MF_LoginTxtD");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("staCopy","0","staLogo:13","100%","46",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            obj.set_text("인천국제공항공사 입주자서비스플랫폼에\r\n오신 것을 환영합니다.");
            obj.set_cssclass("sta_MF_LogoCopy");
            obj.set_fittocontents("height");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btn00_00","31","212","100%","50",null,null,null,null,"50",null,this.divLogin.form);
            obj.set_taborder("2");
            obj.set_text("로그인");
            obj.set_cssclass("btn_MF_Login03");
            this.divLogin.addChild(obj.name, obj);

            obj = new Panel("panBtnLogin","31","181","100%","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_visible("true");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btn00_00\"/></Contents>");
            this.divLogin.addChild(obj.name, obj);

            obj = new Panel("Panel01","110","240","100%","160",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staCopy\"/><PanelItem id=\"PanelItem01\" componentid=\"panBtnLogin\"/></Contents>");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("Button00","63","197","100%","50",null,null,null,null,"50",null,this.divLogin.form);
            obj.set_taborder("8");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_MF_LoginOut");
            obj.set_visible("false");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btn01","31.00","296","69","17",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_text("아이디 찾기");
            obj.set_cssclass("btn_MF_TxtBtn");
            obj.set_fittocontents("width");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("sta02","btn01:5","295","5","18",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("5");
            obj.set_text("|");
            obj.set_cssclass("btn_MF_TxtBtn");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btn01_00","sta02:5","296","82","17",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("4");
            obj.set_text("비밀번호 찾기");
            obj.set_cssclass("btn_MF_TxtBtn");
            obj.set_fittocontents("width");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btn01_00_00","334","296","52","17",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("6");
            obj.set_text("회원가입");
            obj.set_cssclass("btn_MF_TxtBtn");
            obj.set_fittocontents("width");
            this.divLogin.addChild(obj.name, obj);

            obj = new Panel("panID","176","131","100%","30",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("7");
            obj.set_flexcrossaxisalign("start");
            obj.set_visible("true");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexmainaxisalign("spacebetween");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"panPW\"/><PanelItem id=\"PanelItem03\" componentid=\"panRegi\"/></Contents>");
            this.divLogin.addChild(obj.name, obj);

            obj = new Panel("panRegi","216","300","100","17",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("9");
            obj.set_flexcrossaxisalign("end");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btn01_00_00\"/></Contents>");
            this.divLogin.addChild(obj.name, obj);

            obj = new Panel("panPW","110","300","177","18",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("10");
            obj.set_horizontalgap("10");
            obj.set_flexcrossaxisalign("end");
            obj.set_fittocontents("width");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"btn01\"/><PanelItem id=\"PanelItem03\" componentid=\"sta02\"/><PanelItem id=\"PanelItem02\" componentid=\"btn01_00\"/></Contents>");
            this.divLogin.addChild(obj.name, obj);

            obj = new Panel("PanelLogin","20","0","109.38%","360",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("60");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("20");
            obj.set_spacing("0px 0px 10px 0px");
            obj.set_flexcrossaxiswrapalign("start");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem10\" componentid=\"Div00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem05\" componentid=\"btn00\"/><PanelItem id=\"PanelItem09\" componentid=\"Button02\"/><PanelItem id=\"PanelItem07\" componentid=\"sta02\"/><PanelItem id=\"PanelItem06\" componentid=\"btn01\"/><PanelItem id=\"PanelItem02\" componentid=\"sta00\"/><PanelItem id=\"PanelItem04\" componentid=\"sta01\"/><PanelItem id=\"PanelItem01\" componentid=\"divLogin\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divLogin.form
            obj = new Layout("default","",0,0,this.divLogin.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staLogo.set_taborder("1");
                p.staLogo.set_cssclass("sta_MF_Logo");
                p.staLogo.set_minheight("50");
                p.staLogo.set_maxheight("");
                p.staLogo.move("146.00","36","100%","77",null,null);

                p.staLoginUser.set_taborder("11");
                p.staLoginUser.set_text("홍길동님");
                p.staLoginUser.set_cssclass("sta_MF_LoginUser");
                p.staLoginUser.set_visible("true");
                p.staLoginUser.set_maxheight("");
                p.staLoginUser.move("74.00","72","100%","40",null,null);

                p.panBtnMy.set_taborder("14");
                p.panBtnMy.set_horizontalgap("16");
                p.panBtnMy.set_flexmainaxisalign("center");
                p.panBtnMy.set_visible("true");
                p.panBtnMy.set_minheight("40");
                p.panBtnMy.set_maxheight("");
                p.panBtnMy.move("147","101","100%","40",null,null);

                p.Panel00.set_taborder("16");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("10");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_visible("false");
                p.Panel00.move("58","143","100%","80",null,null);

                p.Button01.set_taborder("12");
                p.Button01.set_text("나의 정보");
                p.Button01.set_cssclass("btn_MF_LoginTxt");
                p.Button01.move("165","120","90","34",null,null);

                p.Button02.set_taborder("13");
                p.Button02.set_text("나의 할일 (10)");
                p.Button02.set_fittocontents("width");
                p.Button02.set_cssclass("btn_MF_LoginTxtD");
                p.Button02.move("299","136","103","34",null,null);

                p.staCopy.set_taborder("0");
                p.staCopy.set_text("인천국제공항공사 입주자서비스플랫폼에\r\n오신 것을 환영합니다.");
                p.staCopy.set_cssclass("sta_MF_LogoCopy");
                p.staCopy.set_fittocontents("height");
                p.staCopy.set_maxheight("");
                p.staCopy.move("0","staLogo:13","100%","46",null,null);

                p.btn00_00.set_taborder("2");
                p.btn00_00.set_text("로그인");
                p.btn00_00.set_cssclass("btn_MF_Login03");
                p.btn00_00.set_minheight("50");
                p.btn00_00.set_maxheight("");
                p.btn00_00.move("31","212","100%","50",null,null);

                p.panBtnLogin.set_taborder("15");
                p.panBtnLogin.set_type("vertical");
                p.panBtnLogin.set_verticalgap("10");
                p.panBtnLogin.set_visible("true");
                p.panBtnLogin.set_flexmainaxisalign("center");
                p.panBtnLogin.move("31","181","100%","50",null,null);

                p.Panel01.set_taborder("17");
                p.Panel01.set_type("vertical");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_flexmainaxisalign("center");
                p.Panel01.set_verticalgap("10");
                p.Panel01.move("110","240","100%","160",null,null);

                p.Button00.set_taborder("8");
                p.Button00.set_text("로그아웃");
                p.Button00.set_cssclass("btn_MF_LoginOut");
                p.Button00.set_visible("false");
                p.Button00.set_minheight("50");
                p.Button00.set_maxheight("");
                p.Button00.move("63","197","100%","50",null,null);

                p.btn01.set_taborder("3");
                p.btn01.set_text("아이디 찾기");
                p.btn01.set_cssclass("btn_MF_TxtBtn");
                p.btn01.set_fittocontents("width");
                p.btn01.move("31.00","296","69","17",null,null);

                p.sta02.set_taborder("5");
                p.sta02.set_text("|");
                p.sta02.set_cssclass("btn_MF_TxtBtn");
                p.sta02.move("btn01:5","295","5","18",null,null);

                p.btn01_00.set_taborder("4");
                p.btn01_00.set_text("비밀번호 찾기");
                p.btn01_00.set_cssclass("btn_MF_TxtBtn");
                p.btn01_00.set_fittocontents("width");
                p.btn01_00.move("sta02:5","296","82","17",null,null);

                p.btn01_00_00.set_taborder("6");
                p.btn01_00_00.set_text("회원가입");
                p.btn01_00_00.set_cssclass("btn_MF_TxtBtn");
                p.btn01_00_00.set_fittocontents("width");
                p.btn01_00_00.move("334","296","52","17",null,null);

                p.panID.set_taborder("7");
                p.panID.set_flexcrossaxisalign("start");
                p.panID.set_visible("true");
                p.panID.set_flexcrossaxiswrapalign("start");
                p.panID.set_flexmainaxisalign("spacebetween");
                p.panID.move("176","131","100%","30",null,null);

                p.panRegi.set_taborder("9");
                p.panRegi.set_flexcrossaxisalign("end");
                p.panRegi.set_flexmainaxisalign("end");
                p.panRegi.move("216","300","100","17",null,null);

                p.panPW.set_taborder("10");
                p.panPW.set_horizontalgap("10");
                p.panPW.set_flexcrossaxisalign("end");
                p.panPW.set_fittocontents("width");
                p.panPW.move("110","300","177","18",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_flexmainaxisalign("center");
            obj.set_spacing("30px");
            this.divLogin.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divLogin.form
            obj = new Layout("mobile","",0,0,this.divLogin.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_flexmainaxisalign("start");
                p.Panel01.move("110","240","100%","106",null,null);
            	}
            );
            obj.set_spacing("20px 15px");
            obj.set_type("vertical");
            obj.set_verticalgap("10");
            obj.set_flexmainaxisalign("center");
            this.divLogin.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frm_MainImg.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divLogin.form.Button01.addEventHandler("onclick",this.divLogin_Button01_onclick,this);
            this.divLogin.form.btn00_00.addEventHandler("onclick",this.divLogin_btn_Lgn_onclick,this);
            this.divLogin.form.Button00.addEventHandler("onclick",this.divLogin_Button00_onclick,this);
            this.divLogin.form.btn01.addEventHandler("onclick",this.divLogin_btn01_onclick,this);
            this.divLogin.form.btn01_00.addEventHandler("onclick",this.divLogin_btn01_00_onclick,this);
            this.divLogin.form.btn01_00_00.addEventHandler("onclick",this.divLogin_btn01_00_00_onclick,this);
        };
        this.loadIncludeScript("testMain1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
