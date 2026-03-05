(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pattern05");
            this.set_titletext("사용자 피드백");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1510);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","220","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사용자 피드백");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","279","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("User Feedback");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","85",null,"152","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사용자 피드백은 사용자로부터 특정 화면이나 기능 이용 경험에 대한 평가 의견, 불편 사항, 제안 사항을 수집하는 데 사용되는 패턴이다. 서비스 이용 맥락에서 직접적으로 사용자의 의견을 수집할 수 있는 수단이므로 서비스 운영에 매우 중요한 요소이나, 사용자가 의견을 남기는 것이 의무 사항이 아니므로 사용자의 과업을 방해하지 않으면서 의견을 남기도록 유도하는 것이 중요하다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static00:80",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("구조/예시");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","Static01:24",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Static02:24",null,"1018","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","40","92",null,"746","40",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_spacing("40px 40px 40px 40px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static06_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem04\" componentid=\"Static06_01_00\"/><PanelItem id=\"PanelItem05\" componentid=\"MultiLineTextField03\"/><PanelItem id=\"PanelItem06\" componentid=\"Panel03\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","335","92","264","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("이 페이지에 만족하시나요?");
            obj.set_cssclass("sta_WF_Para19B");
            obj.set_flexgrow("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","144","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("네");
            obj.set_cssclass("btn_WF_Yes");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","274","10","144","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("아니요");
            obj.set_cssclass("btn_WF_No");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","0","100%","64",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_flexcrossaxisalign("start");
            obj.set_horizontalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","40","40","100%","16",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Divider");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01","23","57","100%","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("1.   이 페이지의 어떤 점에 만족하지 못하셨나요? (선택 입력)");
            obj.set_cssclass("sta_WF_AliTop");
            obj.set_fittocontents("height");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","40","152","254","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("원하는 정보를 찾을 수 없음");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","50","204","208","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("정보가 정확하지 않음");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01","50","204","231","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("내용이 마음에 들지 않음");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_02","50","204","225","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("내용을 이해하기 어려움");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","87","286","100%","188",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_spacing("0px 24px 0px 31px");
            obj.set_flexwrap("wrap");
            obj.set_type("vertical");
            obj.set_verticalgap("20");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox00\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"CheckBox00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"CheckBox00_02\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00","50","162","100%","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("2.   기타 제안 사항이 있다면 작성해주세요. (선택 입력)");
            obj.set_cssclass("sta_WF_AliTop");
            obj.set_fittocontents("height");
            this.Div00.addChild(obj.name, obj);

            obj = new MultiLineTextField("MultiLineTextField03","0","897","100%","190",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_labelposition("overlap");
            obj.set_displaynulltext("내용을 입력하세요");
            obj.set_usecharcount("true");
            obj.set_maxlength("300");
            obj.set_readonly("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01","514","16","112","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("취소");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","600","16","112","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_text("평가완료");
            obj.set_cssclass("btn_WF_Crud01");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel03","40","587","100%","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("end");
            obj.set_spacing("24px 0px 0px 0px");
            obj.set_flexcrossaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00_00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel04","416","0","200","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_horizontalgap("8");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("end");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","40","Panel00:40",null,"98","40",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_cssclass("div_POP_Succ");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","16","18","300","26",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("의견을 남겨주셔서 감사합니다.");
            obj.set_cssclass("sta_POP_SuccTxt");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","48","52",null,"26","40",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("보내주신 소중한 의견은 페이지 개선에 도움이 됩니다.");
            obj.set_fittocontents("height");
            obj.set_cssclass("sta_WF_aliTop");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","16","Static00:0","120","18",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_accessibilityenable("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","269","Div00:0","120","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static04.set_taborder("0");
                p.Static04.set_text("의견을 남겨주셔서 감사합니다.");
                p.Static04.set_cssclass("sta_POP_SuccTxt");
                p.Static04.move("16","18","300","26",null,null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("보내주신 소중한 의견은 페이지 개선에 도움이 됩니다.");
                p.Static00.set_fittocontents("height");
                p.Static00.set_cssclass("sta_WF_aliTop");
                p.Static00.move("48","52",null,"26","40",null);

                p.Static02.set_taborder("2");
                p.Static02.set_accessibilityenable("false");
                p.Static02.move("16","Static00:0","120","18",null,null);
            	}
            );
            this.Div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.move("48","52",null,"26","23",null);

                p.Static04.set_fittocontents("height");
                p.Static04.move("16","18",null,"26","23",null);
            	}
            );
            this.Div00.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("0");
                p.Panel00.set_cssclass("pnl_WF_Gbox");
                p.Panel00.set_spacing("40px 40px 40px 40px");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_verticalgap("16");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("40","92",null,"746","40",null);

                p.Static00.set_taborder("1");
                p.Static00.set_text("이 페이지에 만족하시나요?");
                p.Static00.set_cssclass("sta_WF_Para19B");
                p.Static00.set_flexgrow("1");
                p.Static00.move("335","92","264","48",null,null);

                p.Button00.set_taborder("2");
                p.Button00.set_text("네");
                p.Button00.set_cssclass("btn_WF_Yes");
                p.Button00.move("0","0","144","48",null,null);

                p.Button00_00.set_taborder("3");
                p.Button00_00.set_text("아니요");
                p.Button00_00.set_cssclass("btn_WF_No");
                p.Button00_00.move("274","10","144","48",null,null);

                p.Panel01.set_taborder("4");
                p.Panel01.set_flexcrossaxisalign("start");
                p.Panel01.set_horizontalgap("8");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("0","0","100%","64",null,null);

                p.Static01.set_taborder("5");
                p.Static01.set_cssclass("sta_WF_Divider");
                p.Static01.set_accessibilityenable("false");
                p.Static01.move("40","40","100%","16",null,null);

                p.Static06_01.set_taborder("6");
                p.Static06_01.set_text("1.   이 페이지의 어떤 점에 만족하지 못하셨나요? (선택 입력)");
                p.Static06_01.set_cssclass("sta_WF_AliTop");
                p.Static06_01.set_fittocontents("height");
                p.Static06_01.move("23","57","100%","26",null,null);

                p.CheckBox00.set_taborder("7");
                p.CheckBox00.set_text("원하는 정보를 찾을 수 없음");
                p.CheckBox00.move("40","152","254","26",null,null);

                p.CheckBox00_00.set_taborder("8");
                p.CheckBox00_00.set_text("정보가 정확하지 않음");
                p.CheckBox00_00.move("50","204","208","26",null,null);

                p.CheckBox00_01.set_taborder("9");
                p.CheckBox00_01.set_text("내용이 마음에 들지 않음");
                p.CheckBox00_01.move("50","204","231","26",null,null);

                p.CheckBox00_02.set_taborder("10");
                p.CheckBox00_02.set_text("내용을 이해하기 어려움");
                p.CheckBox00_02.move("50","204","225","26",null,null);

                p.Panel02.set_taborder("11");
                p.Panel02.set_spacing("0px 24px 0px 31px");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_type("vertical");
                p.Panel02.set_verticalgap("20");
                p.Panel02.move("87","286","100%","188",null,null);

                p.Static06_01_00.set_taborder("12");
                p.Static06_01_00.set_text("2.   기타 제안 사항이 있다면 작성해주세요. (선택 입력)");
                p.Static06_01_00.set_cssclass("sta_WF_AliTop");
                p.Static06_01_00.set_fittocontents("height");
                p.Static06_01_00.move("50","162","100%","26",null,null);

                p.MultiLineTextField03.set_taborder("13");
                p.MultiLineTextField03.set_labelposition("overlap");
                p.MultiLineTextField03.set_displaynulltext("내용을 입력하세요");
                p.MultiLineTextField03.set_usecharcount("true");
                p.MultiLineTextField03.set_maxlength("300");
                p.MultiLineTextField03.set_readonly("false");
                p.MultiLineTextField03.move("0","897","100%","190",null,null);

                p.Button00_01.set_taborder("14");
                p.Button00_01.set_text("취소");
                p.Button00_01.move("514","16","112","48",null,null);

                p.Button00_00_00.set_taborder("15");
                p.Button00_00_00.set_text("평가완료");
                p.Button00_00_00.set_cssclass("btn_WF_Crud01");
                p.Button00_00_00.move("600","16","112","48",null,null);

                p.Panel03.set_taborder("16");
                p.Panel03.set_horizontalgap("8");
                p.Panel03.set_flexmainaxisalign("end");
                p.Panel03.set_spacing("24px 0px 0px 0px");
                p.Panel03.set_flexcrossaxisalign("end");
                p.Panel03.move("40","587","100%","60",null,null);

                p.Panel04.set_taborder("17");
                p.Panel04.set_horizontalgap("8");
                p.Panel04.set_flexgrow("1");
                p.Panel04.set_flexmainaxisalign("end");
                p.Panel04.move("416","0","200","48",null,null);

                p.Div00.set_taborder("18");
                p.Div00.set_text("Div00");
                p.Div00.set_fittocontents("height");
                p.Div00.set_cssclass("div_POP_Succ");
                p.Div00.set_accessibilityenable("false");
                p.Div00.set_tabstop("false");
                p.Div00.move("40","Panel00:40",null,"98","40",null);

                p.Static02.set_taborder("19");
                p.Static02.set_accessibilityenable("false");
                p.Static02.move("269","Div00:0","120","40",null,null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_spacing("23px 23px 23px 23px");
                p.Panel00.move("23","23",null,"770","23",null);

                p.Static00.move("335","92","264","48",null,null);

                p.Panel01.move("0","0","100%","96",null,null);

                p.Static06_01.move("23","57","100%","52",null,null);

                p.Static06_01_00.move("50","162","100%","26",null,null);

                p.Div00.move("23","Panel00:24",null,"98","23",null);

                p.Static02.move("24","Div00:0","120","23",null,null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1510,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("사용자 피드백");

                p.staH2.set_taborder("0");
                p.staH2.set_text("사용자 피드백");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","220","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("User Feedback");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","0","279","60",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("사용자 피드백은 사용자로부터 특정 화면이나 기능 이용 경험에 대한 평가 의견, 불편 사항, 제안 사항을 수집하는 데 사용되는 패턴이다. 서비스 이용 맥락에서 직접적으로 사용자의 의견을 수집할 수 있는 수단이므로 서비스 운영에 매우 중요한 요소이나, 사용자가 의견을 남기는 것이 의무 사항이 아니므로 사용자의 과업을 방해하지 않으면서 의견을 남기도록 유도하는 것이 중요하다.");
                p.Static00.set_cssclass("sta_WF_Descript");
                p.Static00.set_fittocontents("height");
                p.Static00.move("0","85",null,"152","0",null);

                p.Static01.set_taborder("4");
                p.Static01.set_text("구조/예시");
                p.Static01.set_cssclass("sta_WF_H3_pc");
                p.Static01.set_accessibilityrole("heading3");
                p.Static01.move("0","Static00:80",null,"60","0",null);

                p.Static02.set_taborder("5");
                p.Static02.set_text("기본");
                p.Static02.set_cssclass("sta_WF_H5");
                p.Static02.set_accessibilityrole("heading4");
                p.Static02.move("0","Static01:24",null,"24","0",null);

                p.Div00.set_taborder("6");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Detailbox");
                p.Div00.set_fittocontents("height");
                p.Div00.set_accessibilityenable("false");
                p.Div00.set_tabstop("false");
                p.Div00.move("0","Static02:24",null,"1018","0",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,1820,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.move("0","85",null,"230","0",null);

                p.Div00.set_text("Div00");
                p.Div00.move("0","Static02:24",null,"966","0",null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("pattern05.xfdl", function() {

        this.pattern05_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.pattern05_onload,this);
            this.Div00.form.Static06_01.addEventHandler("onclick",this.Static06_01_onclick,this);
            this.Div00.form.Static06_01_00.addEventHandler("onclick",this.Static06_01_onclick,this);
        };
        this.loadIncludeScript("pattern05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
