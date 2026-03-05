(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pattern03");
            this.set_titletext("동의");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,3000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","70","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("동의");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","100","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Agree");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staDescript","0","85",null,"126","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("동의는 웹사이트의 이용 조건 및 절차 등을 명시한 내용을 읽고 동의 여부나 안내 사항의 확인 여부를 확인하는 데 사용되는 패턴이다. 대개 동의가 필요한 약관은 일반적으로 잘 사용되지 않는 용어로 작성되며 양이 매우 방대하므로 사용자의 이해를 도울 수 있도록 요소들을 알기 쉽게 구조화해야 한다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staTit","0","staDescript:80","210","60",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("구조");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","staTit:24",null,"1120","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_GUIDE_SubBg");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","44","40","90.09009009009009%","984",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","39","39","44","26",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("1단계");
            obj.set_cssclass("sta_WF_Point17B");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","Static01:7","39","57","26",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("/ 4단계");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","39","Static01:16","335","38",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("개인정보 활용동의");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            obj.set_accessibilityrole("heading4");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_00","39","Static00:20",null,"29","39",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("약관동의");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_H5");
            obj.set_tablecellarea("0/0");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading5");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","39","Static06_00:20",null,"220","39",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_spacing("39px 39px 39px 39px");
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02\"/></Contents>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","62","211","150","38",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("모두 동의합니다.");
            obj.set_cssclass("chk_WF_Agree");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","16","16","100%","126",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("6");
            obj.set_text("민간정보 수집이용, 개인정보의 수집 및 이용, 온라인신청 서비스 정책, 고유식별정보 수집 및 이용 항목에 대해 모두 동의합니다. 각 사항에 대한 동의 여부를 개별적으로 선택하실 수 있으며, 선택 동의 사항에 대한 동의를 거부하여도 서비스를 이용하실 수 있습니다.");
            obj.set_cssclass("sta_WF_Top");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("StaH5","39","Panel00:16",null,"26","39",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("[필수] 민감정보 수집이용");
            obj.set_positionstep("0");
            obj.set_cssclass("sta_WF_Txt17B");
            obj.set_tablecellarea("0/0");
            obj.set_flexgrow("1");
            obj.set_accessibilityrole("heading5");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","39","StaH5:16",null,"372","39",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_type("vertical");
            obj.set_verticalgap("2");
            obj.set_fittocontents("height");
            obj.set_spacing("39px 39px 39px 39px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static06_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Static06_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static06_01_00_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Static06_01_00_00_00\"/></Contents>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","100","524","330","32",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("9");
            obj.set_text("약관동의 및 개인정보수집이용동의");
            obj.set_cssclass("sta_WF_H4");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01","86","534","100%","72",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("1.   수집이용하는 개인정보의 항목 :  장애정보\r\n2.   민감정보의 보유 및 이용기간 :");
            obj.set_cssclass("sta_WF_TxtlstOL01");
            obj.set_fittocontents("height");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00","49","86","100%","64",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("11");
            obj.set_text("⦁   보유근거 : 사회보장급여의 이용제공 및 수급권자 발굴에 관한 법률 7조\r\n⦁   보존기간:");
            obj.set_cssclass("sta_WF_TxtlstLv02");
            obj.set_fittocontents("height");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00","49","169","100%","64",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("-   신청정보(신청 상세정보) : 결과통보일로부터 90일\r\n-   신청이력(신청 결과 내역) : 5년");
            obj.set_cssclass("sta_WF_TxtlstLv03");
            obj.set_fittocontents("height");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06_01_00_00_00","49","303","100%","52",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("이용자는 온라인 신청의 민감정보 수집 및 이용 동의를 거부할 권리가 있습니다. 다만, 민감정보의 수집 및 이용을 거부할 경우 해당 서비스를 이용할 수 없음을 알려드립니다.");
            obj.set_cssclass("sta_WF_AliTop");
            obj.set_fittocontents("height");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","39","Panel01:24",null,"74","39",null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("pnl_WF_Agreebox");
            obj.set_spacing("24px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","115","665","360","26",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("민감정보 수집 및 이용에 대한 안내 사항을 읽고 동의합니다.");
            obj.set_flexgrow("1");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","505","1036","223","26",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var Div00_form_Div00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_form_Div00_form_Radio00_innerdataset", obj);
            Div00_form_Div00_form_Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "동의안함"},{"codecolumn" : "1","datacolumn" : "동의함"}]});
            obj.set_innerdataset(Div00_form_Div00_form_Radio00_innerdataset);
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","189","Panel02:0","120","46",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("17");
            obj.set_accessibilityenable("false");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","Div00:80","300","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("예시");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","Static01:40","278","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_H5");
            obj.set_accessibilityrole("heading5");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","Static02:24",null,"1191","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","39","40","335","38",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_text("약관동의");
            obj.set_cssclass("sta_WF_ParaH3_pc");
            obj.set_accessibilityrole("heading4");
            this.Div00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","39","Static00:24","150","38",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("모두 동의합니다.");
            obj.set_cssclass("chk_WF_Agree");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static02","68","CheckBox00:16",null,"78","39",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("민간정보 수집이용, 개인정보의 수집 및 이용, 온라인신청 서비스 정책, 고유식별정보 수집 및 이용 항목에 대해 모두 동의합니다. 각 사항에 대한 동의 여부를 개별적으로 선택하실 수 있으며, 선택 동의 사항에 대한 동의를 거부하여도 서비스를 이용하실 수 있습니다.");
            obj.set_cssclass("sta_WF_Top");
            obj.set_fittocontents("height");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel01","40","Static02:16",null,"900","40",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_type("vertical");
            obj.set_verticalgap("40");
            obj.set_spacing("39px 39px 39px 39px");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel00_00_00_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00","39","39","100%","175",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static03","100","524","299","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("5");
            obj.set_text("[필수] 민감정보 수집이용");
            obj.set_cssclass("sta_WF_Txt17B");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00","93","322","90","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("6");
            obj.set_text("약관읽기");
            obj.set_cssclass("btn_WF_Custom");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02","39","151","100%","74",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("pnl_WF_Agreebox");
            obj.set_spacing("24px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_fittocontents("height");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static04","115","665","360","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("8");
            obj.set_text("민감정보 수집 및 이용에 대한 안내 사항을 읽고 동의합니다.");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Radio("Radio00","505","1036","190","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var Div00_00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_00_form_Radio00_innerdataset", obj);
            Div00_00_form_Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "동의안함"},{"codecolumn" : "1","datacolumn" : "동의함"}]});
            obj.set_innerdataset(Div00_00_form_Radio00_innerdataset);
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","49","49","100%","175",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("10");
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static03_00","100","524","299","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("11");
            obj.set_text("[필수] 개인정보의 수집 및 이용");
            obj.set_cssclass("sta_WF_Txt17B");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00","93","322","90","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("12");
            obj.set_text("약관읽기");
            obj.set_cssclass("btn_WF_Custom");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","39","151","100%","74",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("pnl_WF_Agreebox");
            obj.set_spacing("24px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_fittocontents("height");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static04_00","115","665","360","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("14");
            obj.set_text("개인정보 수집 및 이용애 대한 약관을 읽고 동의합니다.");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","505","1036","190","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var Div00_00_form_Radio00_00_innerdataset = new nexacro.NormalDataset("Div00_00_form_Radio00_00_innerdataset", obj);
            Div00_00_form_Radio00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "동의안함"},{"codecolumn" : "1","datacolumn" : "동의함"}]});
            obj.set_innerdataset(Div00_00_form_Radio00_00_innerdataset);
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00","49","264","100%","175",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("16");
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_00_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","100","524","299","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("17");
            obj.set_text("[필수] 온라인신청 서비스 정책");
            obj.set_cssclass("sta_WF_Txt17B");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","93","322","90","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("18");
            obj.set_text("약관읽기");
            obj.set_cssclass("btn_WF_Custom");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00","39","151","100%","74",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("19");
            obj.set_cssclass("pnl_WF_Agreebox");
            obj.set_spacing("24px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_fittocontents("height");
            obj.set_type("horizontal");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00_00_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","115","665","360","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("20");
            obj.set_text("온라인신청 서비스 정책에 대한 동의서를 읽고 동의합니다.");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Radio("Radio00_00_00","505","1036","190","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("21");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var Div00_00_form_Radio00_00_00_innerdataset = new nexacro.NormalDataset("Div00_00_form_Radio00_00_00_innerdataset", obj);
            Div00_00_form_Radio00_00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "동의안함"},{"codecolumn" : "1","datacolumn" : "동의함"}]});
            obj.set_innerdataset(Div00_00_form_Radio00_00_00_innerdataset);
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00_00_00","49","479","100%","175",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static03_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_00_00_00\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","100","524","299","32",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("23");
            obj.set_text("[선택] 고유식별정보 수집 및 이용");
            obj.set_cssclass("sta_WF_Txt17B");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00","93","322","90","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("24");
            obj.set_text("약관읽기");
            obj.set_cssclass("btn_WF_Custom");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel02_00_00_00","39","151","100%","74",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("25");
            obj.set_cssclass("pnl_WF_Agreebox");
            obj.set_spacing("24px");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj.set_type("horizontal");
            obj.set_flexmainaxisalign("spacebetween");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox01\"/></Contents>");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","115","665","500","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("26");
            obj.set_text("고유식별정보 수집 및 이용에 대한 안내 사항을 읽고 이해했습니다.");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            this.Div00_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","709","1058","74","26",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("27");
            obj.set_text("확인함");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static05","189","Panel01:0","120","39",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("28");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static01.set_taborder("0");
                p.Static01.set_text("1단계");
                p.Static01.set_cssclass("sta_WF_Point17B");
                p.Static01.move("39","39","44","26",null,null);

                p.Static01_00.set_taborder("1");
                p.Static01_00.set_text("/ 4단계");
                p.Static01_00.move("Static01:7","39","57","26",null,null);

                p.Static00.set_taborder("2");
                p.Static00.set_text("개인정보 활용동의");
                p.Static00.set_cssclass("sta_WF_ParaH3_pc");
                p.Static00.set_accessibilityrole("heading4");
                p.Static00.move("39","Static01:16","335","38",null,null);

                p.Static06_00.set_taborder("3");
                p.Static06_00.set_text("약관동의");
                p.Static06_00.set_positionstep("0");
                p.Static06_00.set_cssclass("sta_WF_H5");
                p.Static06_00.set_tablecellarea("0/0");
                p.Static06_00.set_flexgrow("1");
                p.Static06_00.set_accessibilityrole("heading5");
                p.Static06_00.set_maxwidth("");
                p.Static06_00.move("39","Static00:20",null,"29","39",null);

                p.Panel00.set_taborder("4");
                p.Panel00.set_cssclass("pnl_WF_Gbox");
                p.Panel00.set_spacing("39px 39px 39px 39px");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("16");
                p.Panel00.move("39","Static06_00:20",null,"220","39",null);

                p.CheckBox00.set_taborder("5");
                p.CheckBox00.set_text("모두 동의합니다.");
                p.CheckBox00.set_cssclass("chk_WF_Agree");
                p.CheckBox00.move("62","211","150","38",null,null);

                p.Static02.set_taborder("6");
                p.Static02.set_text("민간정보 수집이용, 개인정보의 수집 및 이용, 온라인신청 서비스 정책, 고유식별정보 수집 및 이용 항목에 대해 모두 동의합니다. 각 사항에 대한 동의 여부를 개별적으로 선택하실 수 있으며, 선택 동의 사항에 대한 동의를 거부하여도 서비스를 이용하실 수 있습니다.");
                p.Static02.set_cssclass("sta_WF_Top");
                p.Static02.move("16","16","100%","126",null,null);

                p.StaH5.set_taborder("7");
                p.StaH5.set_text("[필수] 민감정보 수집이용");
                p.StaH5.set_positionstep("0");
                p.StaH5.set_cssclass("sta_WF_Txt17B");
                p.StaH5.set_tablecellarea("0/0");
                p.StaH5.set_flexgrow("1");
                p.StaH5.set_accessibilityrole("heading5");
                p.StaH5.set_maxwidth("");
                p.StaH5.move("39","Panel00:16",null,"26","39",null);

                p.Panel01.set_taborder("8");
                p.Panel01.set_cssclass("pnl_WF_Detailbox");
                p.Panel01.set_type("vertical");
                p.Panel01.set_verticalgap("2");
                p.Panel01.set_fittocontents("height");
                p.Panel01.set_spacing("39px 39px 39px 39px");
                p.Panel01.move("39","StaH5:16",null,"372","39",null);

                p.Static03.set_taborder("9");
                p.Static03.set_text("약관동의 및 개인정보수집이용동의");
                p.Static03.set_cssclass("sta_WF_H4");
                p.Static03.move("100","524","330","32",null,null);

                p.Static06_01.set_taborder("10");
                p.Static06_01.set_text("1.   수집이용하는 개인정보의 항목 :  장애정보\r\n2.   민감정보의 보유 및 이용기간 :");
                p.Static06_01.set_cssclass("sta_WF_TxtlstOL01");
                p.Static06_01.set_fittocontents("height");
                p.Static06_01.move("86","534","100%","72",null,null);

                p.Static06_01_00.set_taborder("11");
                p.Static06_01_00.set_text("⦁   보유근거 : 사회보장급여의 이용제공 및 수급권자 발굴에 관한 법률 7조\r\n⦁   보존기간:");
                p.Static06_01_00.set_cssclass("sta_WF_TxtlstLv02");
                p.Static06_01_00.set_fittocontents("height");
                p.Static06_01_00.move("49","86","100%","64",null,null);

                p.Static06_01_00_00.set_taborder("12");
                p.Static06_01_00_00.set_text("-   신청정보(신청 상세정보) : 결과통보일로부터 90일\r\n-   신청이력(신청 결과 내역) : 5년");
                p.Static06_01_00_00.set_cssclass("sta_WF_TxtlstLv03");
                p.Static06_01_00_00.set_fittocontents("height");
                p.Static06_01_00_00.move("49","169","100%","64",null,null);

                p.Static06_01_00_00_00.set_taborder("13");
                p.Static06_01_00_00_00.set_text("이용자는 온라인 신청의 민감정보 수집 및 이용 동의를 거부할 권리가 있습니다. 다만, 민감정보의 수집 및 이용을 거부할 경우 해당 서비스를 이용할 수 없음을 알려드립니다.");
                p.Static06_01_00_00_00.set_cssclass("sta_WF_AliTop");
                p.Static06_01_00_00_00.set_fittocontents("height");
                p.Static06_01_00_00_00.move("49","303","100%","52",null,null);

                p.Panel02.set_taborder("14");
                p.Panel02.set_cssclass("pnl_WF_Agreebox");
                p.Panel02.set_spacing("24px");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_verticalgap("16");
                p.Panel02.set_flexmainaxisalign("spacebetween");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("39","Panel01:24",null,"74","39",null);

                p.Static04.set_taborder("15");
                p.Static04.set_text("민감정보 수집 및 이용에 대한 안내 사항을 읽고 동의합니다.");
                p.Static04.set_flexgrow("1");
                p.Static04.move("115","665","360","26",null,null);

                p.Radio00.set_taborder("16");
                p.Radio00.set_innerdataset(Div00_form_Div00_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("vertical");
                p.Radio00.set_fittocontents("width");
                p.Radio00.move("505","1036","223","26",null,null);

                p.Static05.set_taborder("17");
                p.Static05.set_accessibilityenable("false");
                p.Static05.move("189","Panel02:0","120","46",null,null);
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
                p.Static06_00.move("23","Static00:20",null,"29","23",null);

                p.Static00.move("23","Static01:16",null,"38","23",null);

                p.Static01.set_taborder("0");
                p.Static01.move("23","23","44","26",null,null);

                p.Panel00.set_spacing("23px 23px 23px 23px");
                p.Panel00.move("23","Static06_00:20",null,"250","23",null);

                p.Static02.move("16","16","100%","250",null,null);

                p.CheckBox00.move("62","211","150","48",null,null);

                p.StaH5.move("23","Panel00:16",null,"26","23",null);

                p.Panel01.set_spacing("23px 23px 23px 23px");
                p.Panel01.move("23","StaH5:16",null,"340","23",null);

                p.Panel02.set_taborder("14");
                p.Panel02.move("23","Panel01:24",null,"142","23",null);

                p.Static04.set_taborder("15");
                p.Static04.move("115","665","360","52",null,null);

                p.Static05.move("189","Panel02:0","120","23",null,null);

                p.Static01_00.set_taborder("1");
                p.Static01_00.move("Static01:7","23","57","26",null,null);

                p.Static06_01.set_taborder("10");

                p.Radio00.set_taborder("16");

                p.Static06_01_00.set_taborder("11");

                p.Static06_01_00_00.set_taborder("12");

                p.Static06_01_00_00_00.set_taborder("13");
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
                p.Div00.set_cssclass("div_WF_Detailbox");
                p.Div00.set_fittocontents("height");
                p.Div00.set_accessibilityenable("false");
                p.Div00.set_tabstop("false");
                p.Div00.move("44","40","90.09009009009009%","984",null,null);
            	}
            );
            obj.set_type("vertical");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("40px 0px");
            this.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00.form
            obj = new Layout("Layout0","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div00.set_text("Div00");
                p.Div00.move("44","40","90.09%","1011",null,null);
            	}
            );
            obj.set_flexmainaxisalign("center");
            obj.set_type("vertical");
            obj.set_flexcrossaxisalign("center");
            obj.set_spacing("40px 0px");
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("0");
                p.Static00.set_text("약관동의");
                p.Static00.set_cssclass("sta_WF_ParaH3_pc");
                p.Static00.set_accessibilityrole("heading4");
                p.Static00.move("39","40","335","38",null,null);

                p.CheckBox00.set_taborder("1");
                p.CheckBox00.set_text("모두 동의합니다.");
                p.CheckBox00.set_cssclass("chk_WF_Agree");
                p.CheckBox00.move("39","Static00:24","150","38",null,null);

                p.Static02.set_taborder("2");
                p.Static02.set_text("민간정보 수집이용, 개인정보의 수집 및 이용, 온라인신청 서비스 정책, 고유식별정보 수집 및 이용 항목에 대해 모두 동의합니다. 각 사항에 대한 동의 여부를 개별적으로 선택하실 수 있으며, 선택 동의 사항에 대한 동의를 거부하여도 서비스를 이용하실 수 있습니다.");
                p.Static02.set_cssclass("sta_WF_Top");
                p.Static02.set_fittocontents("height");
                p.Static02.move("68","CheckBox00:16",null,"78","39",null);

                p.Panel01.set_taborder("3");
                p.Panel01.set_cssclass("pnl_WF_Detailbox");
                p.Panel01.set_type("vertical");
                p.Panel01.set_verticalgap("40");
                p.Panel01.set_spacing("39px 39px 39px 39px");
                p.Panel01.set_fittocontents("height");
                p.Panel01.move("40","Static02:16",null,"900","40",null);

                p.Panel00.set_taborder("4");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("16");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("39","39","100%","175",null,null);

                p.Static03.set_taborder("5");
                p.Static03.set_text("[필수] 민감정보 수집이용");
                p.Static03.set_cssclass("sta_WF_Txt17B");
                p.Static03.move("100","524","299","32",null,null);

                p.Button00.set_taborder("6");
                p.Button00.set_text("약관읽기");
                p.Button00.set_cssclass("btn_WF_Custom");
                p.Button00.move("93","322","90","48",null,null);

                p.Panel02.set_taborder("7");
                p.Panel02.set_cssclass("pnl_WF_Agreebox");
                p.Panel02.set_spacing("24px");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_verticalgap("16");
                p.Panel02.set_flexmainaxisalign("spacebetween");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_type("horizontal");
                p.Panel02.move("39","151","100%","74",null,null);

                p.Static04.set_taborder("8");
                p.Static04.set_text("민감정보 수집 및 이용에 대한 안내 사항을 읽고 동의합니다.");
                p.Static04.set_flexgrow("1");
                p.Static04.set_fittocontents("height");
                p.Static04.move("115","665","360","26",null,null);

                p.Radio00.set_taborder("9");
                p.Radio00.set_innerdataset(Div00_00_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("vertical");
                p.Radio00.set_fittocontents("width");
                p.Radio00.move("505","1036","190","26",null,null);

                p.Panel00_00.set_taborder("10");
                p.Panel00_00.set_type("vertical");
                p.Panel00_00.set_verticalgap("16");
                p.Panel00_00.set_fittocontents("height");
                p.Panel00_00.move("49","49","100%","175",null,null);

                p.Static03_00.set_taborder("11");
                p.Static03_00.set_text("[필수] 개인정보의 수집 및 이용");
                p.Static03_00.set_cssclass("sta_WF_Txt17B");
                p.Static03_00.move("100","524","299","32",null,null);

                p.Button00_00.set_taborder("12");
                p.Button00_00.set_text("약관읽기");
                p.Button00_00.set_cssclass("btn_WF_Custom");
                p.Button00_00.move("93","322","90","48",null,null);

                p.Panel02_00.set_taborder("13");
                p.Panel02_00.set_cssclass("pnl_WF_Agreebox");
                p.Panel02_00.set_spacing("24px");
                p.Panel02_00.set_flexwrap("wrap");
                p.Panel02_00.set_verticalgap("16");
                p.Panel02_00.set_flexmainaxisalign("spacebetween");
                p.Panel02_00.set_fittocontents("height");
                p.Panel02_00.set_type("horizontal");
                p.Panel02_00.move("39","151","100%","74",null,null);

                p.Static04_00.set_taborder("14");
                p.Static04_00.set_text("개인정보 수집 및 이용애 대한 약관을 읽고 동의합니다.");
                p.Static04_00.set_flexgrow("1");
                p.Static04_00.set_fittocontents("height");
                p.Static04_00.move("115","665","360","26",null,null);

                p.Radio00_00.set_taborder("15");
                p.Radio00_00.set_innerdataset(Div00_00_form_Radio00_00_innerdataset);
                p.Radio00_00.set_codecolumn("codecolumn");
                p.Radio00_00.set_datacolumn("datacolumn");
                p.Radio00_00.set_direction("vertical");
                p.Radio00_00.set_fittocontents("width");
                p.Radio00_00.move("505","1036","190","26",null,null);

                p.Panel00_00_00.set_taborder("16");
                p.Panel00_00_00.set_type("vertical");
                p.Panel00_00_00.set_verticalgap("16");
                p.Panel00_00_00.set_fittocontents("height");
                p.Panel00_00_00.move("49","264","100%","175",null,null);

                p.Static03_00_00.set_taborder("17");
                p.Static03_00_00.set_text("[필수] 온라인신청 서비스 정책");
                p.Static03_00_00.set_cssclass("sta_WF_Txt17B");
                p.Static03_00_00.move("100","524","299","32",null,null);

                p.Button00_00_00.set_taborder("18");
                p.Button00_00_00.set_text("약관읽기");
                p.Button00_00_00.set_cssclass("btn_WF_Custom");
                p.Button00_00_00.move("93","322","90","48",null,null);

                p.Panel02_00_00.set_taborder("19");
                p.Panel02_00_00.set_cssclass("pnl_WF_Agreebox");
                p.Panel02_00_00.set_spacing("24px");
                p.Panel02_00_00.set_flexwrap("wrap");
                p.Panel02_00_00.set_verticalgap("16");
                p.Panel02_00_00.set_flexmainaxisalign("spacebetween");
                p.Panel02_00_00.set_fittocontents("height");
                p.Panel02_00_00.set_type("horizontal");
                p.Panel02_00_00.move("39","151","100%","74",null,null);

                p.Static04_00_00.set_taborder("20");
                p.Static04_00_00.set_text("온라인신청 서비스 정책에 대한 동의서를 읽고 동의합니다.");
                p.Static04_00_00.set_flexgrow("1");
                p.Static04_00_00.set_fittocontents("height");
                p.Static04_00_00.move("115","665","360","26",null,null);

                p.Radio00_00_00.set_taborder("21");
                p.Radio00_00_00.set_innerdataset(Div00_00_form_Radio00_00_00_innerdataset);
                p.Radio00_00_00.set_codecolumn("codecolumn");
                p.Radio00_00_00.set_datacolumn("datacolumn");
                p.Radio00_00_00.set_direction("vertical");
                p.Radio00_00_00.set_fittocontents("width");
                p.Radio00_00_00.move("505","1036","190","26",null,null);

                p.Panel00_00_00_00.set_taborder("22");
                p.Panel00_00_00_00.set_type("vertical");
                p.Panel00_00_00_00.set_verticalgap("16");
                p.Panel00_00_00_00.set_fittocontents("height");
                p.Panel00_00_00_00.move("49","479","100%","175",null,null);

                p.Static03_00_00_00.set_taborder("23");
                p.Static03_00_00_00.set_text("[선택] 고유식별정보 수집 및 이용");
                p.Static03_00_00_00.set_cssclass("sta_WF_Txt17B");
                p.Static03_00_00_00.move("100","524","299","32",null,null);

                p.Button00_00_00_00.set_taborder("24");
                p.Button00_00_00_00.set_text("약관읽기");
                p.Button00_00_00_00.set_cssclass("btn_WF_Custom");
                p.Button00_00_00_00.move("93","322","90","48",null,null);

                p.Panel02_00_00_00.set_taborder("25");
                p.Panel02_00_00_00.set_cssclass("pnl_WF_Agreebox");
                p.Panel02_00_00_00.set_spacing("24px");
                p.Panel02_00_00_00.set_flexwrap("wrap");
                p.Panel02_00_00_00.set_verticalgap("16");
                p.Panel02_00_00_00.set_fittocontents("height");
                p.Panel02_00_00_00.set_type("horizontal");
                p.Panel02_00_00_00.set_flexmainaxisalign("spacebetween");
                p.Panel02_00_00_00.move("39","151","100%","74",null,null);

                p.Static04_00_00_00.set_taborder("26");
                p.Static04_00_00_00.set_text("고유식별정보 수집 및 이용에 대한 안내 사항을 읽고 이해했습니다.");
                p.Static04_00_00_00.set_flexgrow("1");
                p.Static04_00_00_00.set_fittocontents("height");
                p.Static04_00_00_00.move("115","665","500","26",null,null);

                p.CheckBox01.set_taborder("27");
                p.CheckBox01.set_text("확인함");
                p.CheckBox01.move("709","1058","74","26",null,null);

                p.Static05.set_taborder("28");
                p.Static05.set_text("");
                p.Static05.set_accessibilityenable("false");
                p.Static05.move("189","Panel01:0","120","39",null,null);
            	}
            );
            this.Div00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_00.form
            obj = new Layout("Layout0","",0,0,this.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.CheckBox00.move("23","Static00:24",null,"38","23",null);

                p.Static00.move("23","23",null,"38","23",null);

                p.Panel01.set_spacing("23px 23px 23px 23px");
                p.Panel01.move("23","Static02:16",null,"1154","23",null);

                p.Panel02.move("39","151","100%","142",null,null);

                p.Static04.move("115","665","360","52",null,null);

                p.Panel00.move("39","39","100%","254",null,null);

                p.Panel00_00_00_00.move("49","479","100%","254",null,null);

                p.Panel02_00_00_00.move("39","151","100%","142",null,null);

                p.Static04_00_00_00.move("115","665","500","52",null,null);

                p.Panel00_00_00.move("49","264","100%","254",null,null);

                p.Panel00_00.move("49","49","100%","254",null,null);

                p.Panel02_00.move("39","151","100%","142",null,null);

                p.Panel02_00_00.move("39","151","100%","142",null,null);

                p.Static04_00_00.move("115","665","360","52",null,null);

                p.Static04_00.move("115","665","360","52",null,null);

                p.Static02.move("50","CheckBox00:16",null,"78","23",null);
            	}
            );
            this.Div00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,3000,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("동의");

                p.staH2.set_taborder("0");
                p.staH2.set_text("동의");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("width");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","70","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Agree");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","0","100","60",null,null);

                p.staDescript.set_taborder("3");
                p.staDescript.set_text("동의는 웹사이트의 이용 조건 및 절차 등을 명시한 내용을 읽고 동의 여부나 안내 사항의 확인 여부를 확인하는 데 사용되는 패턴이다. 대개 동의가 필요한 약관은 일반적으로 잘 사용되지 않는 용어로 작성되며 양이 매우 방대하므로 사용자의 이해를 도울 수 있도록 요소들을 알기 쉽게 구조화해야 한다.");
                p.staDescript.set_cssclass("sta_WF_Descript");
                p.staDescript.set_fittocontents("height");
                p.staDescript.move("0","85",null,"126","0",null);

                p.staTit.set_taborder("4");
                p.staTit.set_text("구조");
                p.staTit.set_cssclass("sta_WF_H2_pc");
                p.staTit.set_accessibilityrole("heading3");
                p.staTit.move("0","staDescript:80","210","60",null,null);

                p.Div00.set_taborder("5");
                p.Div00.set_text("Div00");
                p.Div00.set_cssclass("div_GUIDE_SubBg");
                p.Div00.set_fittocontents("height");
                p.Div00.set_accessibilityenable("false");
                p.Div00.set_tabstop("false");
                p.Div00.move("0","staTit:24",null,"1120","0",null);

                p.Static01.set_taborder("6");
                p.Static01.set_text("예시");
                p.Static01.set_cssclass("sta_WF_ParaH3_pc");
                p.Static01.set_accessibilityrole("heading4");
                p.Static01.move("0","Div00:80","300","32",null,null);

                p.Static02.set_taborder("7");
                p.Static02.set_text("기본");
                p.Static02.set_cssclass("sta_WF_H5");
                p.Static02.set_accessibilityrole("heading5");
                p.Static02.move("0","Static01:40","278","32",null,null);

                p.Div00_00.set_taborder("8");
                p.Div00_00.set_text("Div00");
                p.Div00_00.set_cssclass("div_WF_Detailbox");
                p.Div00_00.set_fittocontents("height");
                p.Div00_00.set_accessibilityenable("false");
                p.Div00_00.set_tabstop("false");
                p.Div00_00.move("0","Static02:24",null,"1191","0",null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,3420,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staDescript.move("0","85",null,"204","0",null);

                p.Div00.set_text("Div00");
                p.Div00.move("0","staTit:24",null,"1091","0",null);

                p.Div00_00.set_text("Div00");
                p.Div00_00.move("0","Static02:24",null,"1428","0",null);

                p.staTit.move("0","staDescript:80","100%","60",null,null);
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
        this.registerScript("pattern03.xfdl", function() {

        this.pattern03_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.pattern03_onload,this);
            this.Div00.form.Div00.form.Static06_01.addEventHandler("onclick",this.Static06_01_onclick,this);
            this.Div00.form.Div00.form.Static06_01_00.addEventHandler("onclick",this.Static06_01_onclick,this);
            this.Div00.form.Div00.form.Static06_01_00_00.addEventHandler("onclick",this.Static06_01_onclick,this);
            this.Div00.form.Div00.form.Static06_01_00_00_00.addEventHandler("onclick",this.Static06_01_onclick,this);
        };
        this.loadIncludeScript("pattern03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
