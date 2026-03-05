(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pattern11");
            this.set_titletext("확인");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","15","129","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Confirm");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인은 사용자가 요청한 행위가 쉽게 취소할 수 없는 결과로 이어지거나, 행동의 효과 또는 부작용을 사용자가 인지해야 하는 경우에 사용한다. 사용자가 작업 내용을 확인하거나 수행을 승인하도록 함으로써, 어떤 작업이 수행될 것인지에 관한 불확실성을 감소시키고 내용을 한 번 더 점검할 수 있어 오류를 예방할 수 있다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","0","Static00:80","300","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","Static00_00:48","300","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("예시");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","Static01:40","278","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Static02:24",null,"791","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_accessibilityenable("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","63","40",null,"710","63",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_POP_Bg");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","39","56",null,"23","39",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("약관동의");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_15B");
            obj.set_tablecellarea("0/0");
            obj.set_flexgrow("1");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","39","89",null,"40","39",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_horizontalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","39","Static01:10","300","36",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("[필수] 민감정보 수집이용 ");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading4");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","592","0","88","40",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01_00\"/></Contents>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","564","87","40","40",null,null,"40",null,"40",null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Prev");
            obj.set_accessibilitylabel("이전 페이지");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00","612","87","40","40",null,null,"40",null,"40",null,this.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Next");
            obj.set_accessibilitylabel("다음 페이지");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00","39","Panel00:14",null,"334","39",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_formscrolltype("both");
            obj.set_formscrollbartype("autoindicator autoindicator");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","40","40","355","32",null,null,null,null,null,null,this.Div00.form.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("약관동의 및 개인정보수집이용동의");
            obj.set_cssclass("sta_WF_H4");
            obj.set_accessibilityrole("heading5");
            this.Div00.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01","39","Static03:2",null,"72","39",null,null,null,null,null,this.Div00.form.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("1.   수집이용하는 개인정보의 항목 :  장애정보\r\n2.   민감정보의 보유 및 이용기간 :");
            obj.set_cssclass("sta_WF_TxtlstOL01");
            obj.set_fittocontents("height");
            this.Div00.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00","39","Static06_01:2",null,"64","39",null,null,null,null,null,this.Div00.form.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("⦁   보유근거 : 사회보장급여의 이용제공 및 수급권자 발굴에 관한 법률 7조\r\n⦁   보존기간:");
            obj.set_cssclass("sta_WF_TxtlstLv02");
            obj.set_fittocontents("height");
            this.Div00.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00","39","Static06_01_00:2",null,"64","39",null,null,null,null,null,this.Div00.form.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("-   신청정보(신청 상세정보) : 결과통보일로부터 90일\r\n-   신청이력(신청 결과 내역) : 5년");
            obj.set_cssclass("sta_WF_TxtlstLv03");
            obj.set_fittocontents("height");
            this.Div00.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00","39","Static06_01_00_00:2",null,"52","39",null,null,null,null,null,this.Div00.form.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("이용자는 온라인 신청의 민감정보 수집 및 이용 동의를 거부할 권리가 있습니다. 다만, 민감정보의 수집 및 이용을 거부할 경우 해당 서비스를 이용할 수 없음을 알려드립니다.");
            obj.set_cssclass("sta_WF_AliTop");
            obj.set_fittocontents("height");
            this.Div00.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","39","Div00:24",null,"78","39",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("pnl_WF_Agreebox");
            obj.set_spacing("24px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("center");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","505","1036","223","26",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var Div00_form_Div00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_form_Div00_form_Radio00_innerdataset", obj);
            Div00_form_Div00_form_Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "동의안함"},{"codecolumn" : "1","datacolumn" : "동의함"}]});
            obj.set_innerdataset(Div00_form_Div00_form_Radio00_innerdataset);
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel03","39","Panel02:8",null,"82","39",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("end");
            obj.set_flexcrossaxisalign("start");
            obj.set_spacing("16px 0px 16px 0px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","514","16","78","48",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("취소");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00","600","16","78","48",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Crud01");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static05",null,"Panel03:0","120","39","40",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("12");
            obj.set_accessibilityenable("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01",null,"23","24","24","23",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_POP_Cancel");
            obj.set_enable("true");
            obj.set_accessibilitylabel("닫기");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static05",null,"Div00:0","120","39","247",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_accessibilityenable("false");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static03.set_taborder("0");
                p.Static03.set_text("약관동의 및 개인정보수집이용동의");
                p.Static03.set_cssclass("sta_WF_H4");
                p.Static03.set_accessibilityrole("heading5");
                p.Static03.move("40","40","355","32",null,null);

                p.Static06_01.set_taborder("1");
                p.Static06_01.set_text("1.   수집이용하는 개인정보의 항목 :  장애정보\r\n2.   민감정보의 보유 및 이용기간 :");
                p.Static06_01.set_cssclass("sta_WF_TxtlstOL01");
                p.Static06_01.set_fittocontents("height");
                p.Static06_01.move("39","Static03:2",null,"72","39",null);

                p.Static06_01_00.set_taborder("2");
                p.Static06_01_00.set_text("⦁   보유근거 : 사회보장급여의 이용제공 및 수급권자 발굴에 관한 법률 7조\r\n⦁   보존기간:");
                p.Static06_01_00.set_cssclass("sta_WF_TxtlstLv02");
                p.Static06_01_00.set_fittocontents("height");
                p.Static06_01_00.move("39","Static06_01:2",null,"64","39",null);

                p.Static06_01_00_00.set_taborder("3");
                p.Static06_01_00_00.set_text("-   신청정보(신청 상세정보) : 결과통보일로부터 90일\r\n-   신청이력(신청 결과 내역) : 5년");
                p.Static06_01_00_00.set_cssclass("sta_WF_TxtlstLv03");
                p.Static06_01_00_00.set_fittocontents("height");
                p.Static06_01_00_00.move("39","Static06_01_00:2",null,"64","39",null);

                p.Static06_01_00_00_00.set_taborder("4");
                p.Static06_01_00_00_00.set_text("이용자는 온라인 신청의 민감정보 수집 및 이용 동의를 거부할 권리가 있습니다. 다만, 민감정보의 수집 및 이용을 거부할 경우 해당 서비스를 이용할 수 없음을 알려드립니다.");
                p.Static06_01_00_00_00.set_cssclass("sta_WF_AliTop");
                p.Static06_01_00_00_00.set_fittocontents("height");
                p.Static06_01_00_00_00.move("39","Static06_01_00_00:2",null,"52","39",null);
            	}
            );
            this.Div00.form.Div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form.Div00.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form.Div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static03.move("23","23","299","32",null,null);

                p.Static06_01.move("23","Static03:2",null,"72","23",null);

                p.Static06_01_00.move("23","Static06_01:2",null,"64","23",null);

                p.Static06_01_00_00.move("23","Static06_01_00:2",null,"64","23",null);

                p.Static06_01_00_00_00.move("23","Static06_01_00_00:2",null,"52","23",null);
            	}
            );
            this.Div00.form.Div00.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01.set_taborder("0");
                p.Static01.set_text("약관동의");
                p.Static01.set_positionstep("0");
                p.Static01.set_cssclass("sta_WF_15B");
                p.Static01.set_tablecellarea("0/0");
                p.Static01.set_flexgrow("1");
                p.Static01.set_maxwidth("");
                p.Static01.move("39","56",null,"23","39",null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_horizontalgap("8");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_verticalgap("16");
                p.Panel00.move("39","89",null,"40","39",null);

                p.Static00.set_taborder("2");
                p.Static00.set_text("[필수] 민감정보 수집이용 ");
                p.Static00.set_cssclass("sta_WF_H4_pc");
                p.Static00.set_flexgrow("1");
                p.Static00.set_accessibilityrole("heading4");
                p.Static00.move("39","Static01:10","300","36",null,null);

                p.Panel01.set_taborder("3");
                p.Panel01.set_horizontalgap("8");
                p.Panel01.move("592","0","88","40",null,null);

                p.Button01.set_taborder("4");
                p.Button01.set_cssclass("btn_WF_Prev");
                p.Button01.set_accessibilitylabel("이전 페이지");
                p.Button01.set_minheight("40");
                p.Button01.set_maxheight("");
                p.Button01.set_minwidth("40");
                p.Button01.set_maxwidth("");
                p.Button01.move("564","87","40","40",null,null);

                p.Button01_00.set_taborder("5");
                p.Button01_00.set_cssclass("btn_WF_Next");
                p.Button01_00.set_accessibilitylabel("다음 페이지");
                p.Button01_00.set_minheight("40");
                p.Button01_00.set_maxheight("");
                p.Button01_00.set_minwidth("40");
                p.Button01_00.set_maxwidth("");
                p.Button01_00.move("612","87","40","40",null,null);

                p.Div00.set_taborder("6");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_WF_Detailbox");
                p.Div00.set_formscrolltype("both");
                p.Div00.set_formscrollbartype("autoindicator autoindicator");
                p.Div00.move("39","Panel00:14",null,"334","39",null);

                p.Panel02.set_taborder("7");
                p.Panel02.set_cssclass("pnl_WF_Agreebox");
                p.Panel02.set_spacing("24px");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_verticalgap("16");
                p.Panel02.set_flexmainaxisalign("center");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("39","Div00:24",null,"78","39",null);

                p.Radio00.set_taborder("8");
                p.Radio00.set_innerdataset(Div00_form_Div00_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("vertical");
                p.Radio00.set_fittocontents("width");
                p.Radio00.move("505","1036","223","26",null,null);

                p.Panel03.set_taborder("9");
                p.Panel03.set_horizontalgap("8");
                p.Panel03.set_flexmainaxisalign("end");
                p.Panel03.set_flexcrossaxisalign("start");
                p.Panel03.set_spacing("16px 0px 16px 0px");
                p.Panel03.move("39","Panel02:8",null,"82","39",null);

                p.Button00.set_taborder("10");
                p.Button00.set_text("취소");
                p.Button00.move("514","16","78","48",null,null);

                p.Button00_00.set_taborder("11");
                p.Button00_00.set_text("확인");
                p.Button00_00.set_cssclass("btn_WF_Crud01");
                p.Button00_00.move("600","16","78","48",null,null);

                p.Static05.set_taborder("12");
                p.Static05.set_accessibilityenable("false");
                p.Static05.move(null,"Panel03:0","120","39","40",null);

                p.Button00_01.set_taborder("13");
                p.Button00_01.set_cssclass("btn_POP_Cancel");
                p.Button00_01.set_enable("true");
                p.Button00_01.set_accessibilitylabel("닫기");
                p.Button00_01.move(null,"23","24","24","23",null);
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
                p.Panel00.move("23","89",null,"40","23",null);

                p.Static01.move("23","56",null,"23","23",null);

                p.Static00.move("16","Static01:10","300","36",null,null);

                p.Div00.set_formscrolltype("vertical");
                p.Div00.set_formscrollbartype("indicator indicator");
                p.Div00.move("23","Panel00:14",null,"334","23",null);

                p.Panel02.move("23","Div00:24",null,"78","23",null);

                p.Panel03.move("23","587",null,"82","23",null);

                p.Static05.move("318","669","120","15",null,null);
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
                p.Div00.set_taborder("0");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_POP_Bg");
                p.Div00.set_fittocontents("height");
                p.Div00.set_accessibilityenable("false");
                p.Div00.move("63","40",null,"710","63",null);

                p.Static05.set_taborder("1");
                p.Static05.set_accessibilityenable("false");
                p.Static05.move(null,"Div00:0","120","39","247",null);
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
                p.Div00.set_text("Div00");
                p.Div00.move("10","40",null,"686","10",null);
            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1400,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("확인");

                p.staH2.set_taborder("0");
                p.staH2.set_text("확인");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","70","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Confirm");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","15","129","30",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("확인은 사용자가 요청한 행위가 쉽게 취소할 수 없는 결과로 이어지거나, 행동의 효과 또는 부작용을 사용자가 인지해야 하는 경우에 사용한다. 사용자가 작업 내용을 확인하거나 수행을 승인하도록 함으로써, 어떤 작업이 수행될 것인지에 관한 불확실성을 감소시키고 내용을 한 번 더 점검할 수 있어 오류를 예방할 수 있다.");
                p.Static00.set_cssclass("sta_WF_Descript");
                p.Static00.set_fittocontents("height");
                p.Static00.move("0","85",null,"126","0",null);

                p.Static00_00.set_taborder("4");
                p.Static00_00.set_text("유형");
                p.Static00_00.set_cssclass("sta_WF_H2_pc");
                p.Static00_00.set_accessibilityrole("heading3");
                p.Static00_00.move("0","Static00:80","300","60",null,null);

                p.Static01.set_taborder("5");
                p.Static01.set_text("예시");
                p.Static01.set_cssclass("sta_WF_ParaH3_pc");
                p.Static01.set_accessibilityrole("heading4");
                p.Static01.move("0","Static00_00:48","300","32",null,null);

                p.Static02.set_taborder("6");
                p.Static02.set_text("기본");
                p.Static02.set_cssclass("sta_WF_H5");
                p.Static02.set_accessibilityrole("heading5");
                p.Static02.move("0","Static01:40","278","32",null,null);

                p.Div00.set_taborder("7");
                p.Div00.set_cssclass("div_WF_Detailbox");
                p.Div00.set_accessibilityenable("false");
                p.Div00.set_text("");
                p.Div00.move("0","Static02:24",null,"791","0",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,1450,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_text("");
                p.Div00.move("0","Static02:24",null,"817","0",null);

                p.Static00.move("0","85",null,"204","0",null);
            	}
            );
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("pattern11.xfdl", function() {

        this.pattern11_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.pattern11_onload,this);
            this.Div00.form.Div00.form.Div00.form.Static06_01.addEventHandler("onclick",this.Static06_01_onclick,this);
            this.Div00.form.Div00.form.Div00.form.Static06_01_00.addEventHandler("onclick",this.Static06_01_onclick,this);
            this.Div00.form.Div00.form.Div00.form.Static06_01_00_00.addEventHandler("onclick",this.Static06_01_onclick,this);
            this.Div00.form.Div00.form.Div00.form.Static06_01_00_00_00.addEventHandler("onclick",this.Static06_01_onclick,this);
        };
        this.loadIncludeScript("pattern11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
