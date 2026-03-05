(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_initvalueid(" ");
            this.set_name("guide01");
            this.set_titletext("sta, edt, msk, txt, mtxtf, textf");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,4700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","200","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("컴포넌트 01");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","215","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","231","0","657","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("sta, edt, msk, txt, mtxtf, textf");
            obj.set_cssclass("sta_WF_ParaH5");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel16","0","0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_flexcrossaxisalign("center");
            obj.set_horizontalgap("15");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staH2\"/><PanelItem id=\"PanelItem01\" componentid=\"staDivider\"/><PanelItem id=\"PanelItem02\" componentid=\"staEtit\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit","0","Panel16:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staTit00_00","0","222","100%","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit01_00","0","304","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","336","100%","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("normal 400 17px/ 150% “GOV”, 가나다라마바사아자차카, ABCDEFGHIJKLMNOPQRSTU");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","0","304","100%","55",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit01_01","0","383","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","415","100%","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("normal 400 17px/ 150% “GOV”, 가나다라마바사아자차카, ABCDEFGHIJKLMNOPQRSTU");
            obj.set_enable("false");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","0","383","100%","55",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit01_02","0","1812","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("* usedecorate = \"tre\"");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","20","20","100%","229",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("⦁    fs글자의 크기(fontsize)를 지정합니다.\r\n     ex) <fs v= \'12\'></fs>\r\n⦁   fc 글자의 색상(fontcolor)를 지정합니다.\r\n     ex) <fc v= \'red\'></fc> <fc v= \'#FF00FF\'></fc>\r\n⦁   ff 글자의 종류(fontface)를 지정합니다.\r\n     ex) <ff v= \'굴림\'></fs>\r\n⦁   b 굵은 글씨를(bold)를 지정합니다.\r\n     ex) <b v= \'true\'></b>\r\n⦁   i 이텔릭체를(italic)를 지정합니다.\r\n     ex) <i v= \'ture\'></i>\r\n⦁   u 언더라인을(underline)를 지정합니다.\r\n     ex) <u v= \'ture\'></u>\r\n⦁   s 취소선을(strike)를 지정합니다.\r\n     ex) <s v= \'ture\'></s>");
            obj.set_cssclass("sta_WF_Infor13");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","40","198","100%","229",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","staTit:24",null,"527","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_spacing("40px");
            obj.set_verticalgap("24");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem04\" componentid=\"staTit00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit","0","803","100%","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Heading 2~5  Pc / Mobile  [ H1 : TopLogo] ");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staH2_01","0","660","100%","60",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("H2");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("stades01","0","718","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("KRDS Font Xlarge  | H2_pc : 40px | H2_m : 32px");
            obj.set_cssclass("sta_WF_Lable15R");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","0","660","100%","84",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staH2_01\"/><PanelItem id=\"PanelItem01\" componentid=\"stades01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staH3","0","794","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("H3");
            obj.set_cssclass("sta_WF_H3_pc");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("stades02","0","840","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("KRDS Font large  | H3_pc : 32px | H3_m : 24px");
            obj.set_cssclass("sta_WF_Lable15R");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","0","794","100%","84",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staH3\"/><PanelItem id=\"PanelItem01\" componentid=\"stades02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staH4","0","906","100%","36",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("H4");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("stades03","0","948","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("KRDS  Font medium | H4_pc : 24px | H4_m :  22px");
            obj.set_cssclass("sta_WF_Lable15R");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","0","906","100%","84",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staH4\"/><PanelItem id=\"PanelItem01\" componentid=\"stades03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staH5","0","996","100%","29",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("H5");
            obj.set_cssclass("sta_WF_H5");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("stades04","0","1018","100%","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("KRDS  Font small | H5_pc : 19px | H4_m :  19px");
            obj.set_cssclass("sta_WF_Lable15R");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_03","0","996","100%","84",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staH5\"/><PanelItem id=\"PanelItem01\" componentid=\"stades04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Panel00:24",null,"436","0",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_spacing("40px");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"staSubtit\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel01_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit00","0","1263","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Static - Label");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit01","0","1600","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Search Label + Input");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Static("staSch","0","1646","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Search Label");
            obj.set_cssclass("sta_WF_SchDetail");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","120","1646","140","48",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","0","32","320","48",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSch\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","0","1600","320","80",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit01_04","0","1600","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Search Label + Essential Input");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Static("staSch01_00","10","42","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Search Label");
            obj.set_cssclass("sta_WF_SchDetail");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","288","32","140","48",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("essential");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_03","288","32","320","48",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSch01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_02","50","50","320","80",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit01_04\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel02_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","Panel01:24",null,"222","0",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_spacing("40px");
            obj.set_verticalgap("24");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_horizontalgap("24");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staTit00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel02_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","Panel02:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("Edit");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit02","0","1932","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","0","1964","230","48",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_value("투비소프트");
            obj.set_text("투비소프트");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","0","1932","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit02\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit02_00","0","2052","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_00","0","2092","230","48",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_enable("false");
            obj.set_value("투비소프트");
            obj.set_text("투비소프트");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","0","2052","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit02_01","0","2180","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_01","0","2220","230","48",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_readonly("true");
            obj.set_value("투비소프트");
            obj.set_text("투비소프트");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_02","0","2180","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit02_02","0","2308","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_02","0","2348","230","48",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_value("투비소프트");
            obj.set_cssclass("essential");
            obj.set_text("투비소프트");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_03","0","2308","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit02_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit02_03","0","2436","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("error");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_02_00","0","2476","230","48",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_value("투비소프트");
            obj.set_cssclass("error");
            obj.set_text("투비소프트");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_04","0","2436","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit02_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit02_04","0","2436","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("output");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01_02_01","0","2476","230","48",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_value("투비소프트");
            obj.set_cssclass("output");
            obj.set_text("투비소프트");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_05","304","154","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit02_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit01_02_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","Static01:16",null,"264","0",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_horizontalgap("24");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel03_03\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel03_04\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel03_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit00_01","-4","2040","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("활용예시");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit01_03","0","1684","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("Detail Label");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Static("staSch00","0","1714","253","24",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","0","1746","253","48",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","34","2114","253","120",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit01_03\"/><PanelItem id=\"PanelItem01\" componentid=\"staSch00\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit01_03_00","0","1684","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("Detail Label + Hint");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Static("staSch00_00","0","1714","253","24",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("레이블");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","0","0","253","20",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("입력시 필요한 정보를 입력해 주세요");
            obj.set_cssclass("sta_WF_Infor13");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","10","82","253","48",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","317","2137","253","148",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit01_03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"staSch00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Static02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Edit00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit01_03_00_00","0","1684","100%","32",null,null,null,null,null,null,this);
            obj.set_text("Edit Class : edt_WF_Sch");
            obj.set_cssclass("sta_WF_Subtit15");
            obj.set_taborder("72");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","40","418","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","0","0","100%","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_flexgrow("1");
            obj.set_cssclass("edt_WF_Sch");
            obj.set_accessibilitylabel("검색");
            obj.set_value("가나다라마바사아자차카타파하");
            obj.set_text("가나다라마바사아자차카타파하");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"4","40","40","4",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_accessibilitylabel("검색");
            this.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel04_02","50","256","253","88",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit01_03_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Div00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit01_03_00_00_00","0","1684","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("Edit Class : edt_WF_SchE");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","40","418","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","0","0","100%","48",null,null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_flexgrow("1");
            obj.set_cssclass("edt_WF_SchE");
            obj.set_accessibilitylabel("검색");
            obj.set_value("가나다라마바사아자차카타파하");
            obj.set_text("가나다라마바사아자차카타파하");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"4","40","40","4",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_accessibilitylabel("검색");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel04_03","50","428","253","88",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit01_03_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Div00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","Panel03:16",null,"658","0",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_verticalgap("24");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"staTit00_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_01\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel04_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel04_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","Panel04:80",null,"48","2",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit03","0","1932","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","45","2886","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_value("100000");
            obj.set_format("0,0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_00","0","1932","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit03\"/><PanelItem id=\"PanelItem03\" componentid=\"MaskEdit00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit03_00","0","2052","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","10","42","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_enable("false");
            obj.set_value("100000");
            obj.set_format("0,0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_01","0","2052","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"MaskEdit00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit03_01","0","2180","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_01","10","42","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_readonly("true");
            obj.set_value("100000");
            obj.set_format("0,0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_02","0","2180","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"MaskEdit00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit03_02","0","2308","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_02","10","42","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_value("100000");
            obj.set_cssclass("essential");
            obj.set_format("0,0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_03","0","2308","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit03_02\"/><PanelItem id=\"PanelItem01\" componentid=\"MaskEdit00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit03_03","0","2436","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("error");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_03","10","42","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_value("100000");
            obj.set_cssclass("error");
            obj.set_format("0,0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_04","0","2436","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit03_03\"/><PanelItem id=\"PanelItem01\" componentid=\"MaskEdit00_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit03_04","0","2436","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("output");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_03_00","10","42","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_value("100000");
            obj.set_cssclass("output");
            obj.set_format("0,0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_05","304","154","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit03_04\"/><PanelItem id=\"PanelItem01\" componentid=\"MaskEdit00_03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","Static02:16",null,"264","0",null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_horizontalgap("24");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel05_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel05_03\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel05_04\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel05_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","Panel05:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit04","0","1932","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","160","3364","100%","100",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_value("투비소프트\n투비소프트\n투비소프트");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06_00","0","1932","230","160",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit04\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit04_00","0","2052","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","10","42","100%","100",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_value("투비소프트\n투비소프트\n투비소프트");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06_01","0","2052","230","160",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit04_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit04_01","0","2180","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_01","10","42","100%","100",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_value("투비소프트\n투비소프트\n투비소프트");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06_02","0","2180","230","160",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit04_01\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit04_02","0","2308","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_02","10","42","100%","100",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_value("투비소프트\n투비소프트\n투비소프트");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06_03","0","2308","230","160",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit04_02\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit04_03","0","2436","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("error");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_03","10","42","100%","100",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_value("투비소프트\n투비소프트\n투비소프트");
            obj.set_cssclass("error");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06_04","0","2436","230","160",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit04_03\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit04_04","10","2446","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("output");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_04","10","42","100%","100",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_value("투비소프트\n투비소프트\n투비소프트");
            obj.set_cssclass("output");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06_05","304","154","230","160",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit04_04\"/><PanelItem id=\"PanelItem01\" componentid=\"TextArea00_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","Static03:16",null,"424","0",null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_horizontalgap("24");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel06_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel06_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel06_03\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel06_04\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel06_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","Panel06:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("MultiLine TextField");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05","0","1932","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new MultiLineTextField("MultiLineTextField00","145","3897","100%","180",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_labeltext("레이블");
            obj.set_labelposition("outside");
            obj.set_headerheight("31");
            obj.set_value("투비소프트\n투비소프트\n투비소프트");
            obj.set_footerheight("28");
            obj.set_usehelpertext("true");
            obj.set_displaynulltext("내용을 입력해주세요");
            obj.set_usecharcount("true");
            obj.set_maxlength("99");
            obj.set_helpertext("메시지를 입력해주세요");
            obj.set_labelfloatingfixed("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_00","0","1932","230","212",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05\"/><PanelItem id=\"PanelItem01\" componentid=\"MultiLineTextField00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_00","0","2052","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new MultiLineTextField("MultiLineTextField00_00","10","42","100%","180",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_labeltext("레이블");
            obj.set_labelfloatingfixed("true");
            obj.set_labelposition("outside");
            obj.set_headerheight("31");
            obj.set_value("투비소프트\n투비소프트\n투비소프트");
            obj.set_helpertext("메시지를 입력해주세요");
            obj.set_footerheight("28");
            obj.set_usehelpertext("true");
            obj.set_displaynulltext("내용을 입력해주세요");
            obj.set_enable("false");
            obj.set_usecharcount("true");
            obj.set_maxlength("99");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_01","0","2052","230","212",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_00\"/><PanelItem id=\"PanelItem01\" componentid=\"MultiLineTextField00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_01","0","2180","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new MultiLineTextField("MultiLineTextField00_01","10","42","100%","180",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_labeltext("레이블");
            obj.set_labelfloatingfixed("true");
            obj.set_labelposition("outside");
            obj.set_headerheight("31");
            obj.set_value("투비소프트\n투비소프트\n투비소프트");
            obj.set_footerheight("28");
            obj.set_usehelpertext("true");
            obj.set_displaynulltext("내용을 입력해주세요");
            obj.set_helpertext("메시지를 입력해주세요");
            obj.set_readonly("true");
            obj.set_usecharcount("true");
            obj.set_maxlength("99");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_02","0","2180","230","212",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_01\"/><PanelItem id=\"PanelItem01\" componentid=\"MultiLineTextField00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new MultiLineTextField("MultiLineTextField00_02","10","42","100%","180",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_labeltext("레이블");
            obj.set_labelfloatingfixed("true");
            obj.set_labelposition("outside");
            obj.set_headerheight("31");
            obj.set_cssclass("essential");
            obj.set_value("투비소프트\n투비소프트\n투비소프트");
            obj.set_footerheight("28");
            obj.set_usehelpertext("true");
            obj.set_displaynulltext("내용을 입력해주세요");
            obj.set_helpertext("메시지를 입력해주세요");
            obj.set_usecharcount("true");
            obj.set_maxlength("99");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_03","0","2308","230","212",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_02\"/><PanelItem id=\"PanelItem01\" componentid=\"MultiLineTextField00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_02","0","2308","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_03","0","2436","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("error");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new MultiLineTextField("MultiLineTextField00_03","10","42","100%","180",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_labeltext("레이블");
            obj.set_labelfloatingfixed("true");
            obj.set_labelposition("outside");
            obj.set_headerheight("31");
            obj.set_value("투비소프트\n투비소프트\n투비소프트");
            obj.set_footerheight("28");
            obj.set_usehelpertext("true");
            obj.set_displaynulltext("내용을 입력해주세요");
            obj.set_helpertext("메시지를 입력해주세요");
            obj.set_usecharcount("true");
            obj.set_maxlength("99");
            obj.set_cssclass("error");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_04","0","2436","230","212",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_03\"/><PanelItem id=\"PanelItem01\" componentid=\"MultiLineTextField00_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","Static04:16",null,"528","0",null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_horizontalgap("24");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel07_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel07_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel07_03\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel07_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","Panel07:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("TextField");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit06_00","0","1932","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField00","170","4487","100%","109",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_labeltext("레이블");
            obj.set_headerheight("31");
            obj.set_labelposition("outside");
            obj.set_labelfloatingfixed("true");
            obj.set_value("투비소프트");
            obj.set_usehelpertext("true");
            obj.set_footerheight("28");
            obj.set_displaynulltext("내용을 입력해주세요");
            obj.set_invalidtext("내용을 확인해주세요");
            obj.set_helpertext("내용을 입력해주세요");
            obj.set_contentheight("48");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08_00","0","1932","230","139",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit06_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextField00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit06_01","0","2052","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField00_01","10","42","100%","109",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_labeltext("레이블");
            obj.set_headerheight("31");
            obj.set_labelfloatingfixed("true");
            obj.set_labelposition("outside");
            obj.set_enable("false");
            obj.set_value("투비소프트");
            obj.set_usehelpertext("true");
            obj.set_footerheight("28");
            obj.set_displaynulltext("내용을 입력해주세요");
            obj.set_invalidtext("내용을 확인해주세요");
            obj.set_helpertext("내용을 입력해주세요");
            obj.set_contentheight("48");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08_01","0","2052","230","139",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit06_01\"/><PanelItem id=\"PanelItem01\" componentid=\"TextField00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit06_02","0","2180","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_text("readonly");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField00_02","10","42","100%","109",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_labeltext("레이블");
            obj.set_headerheight("31");
            obj.set_labelfloatingfixed("true");
            obj.set_labelposition("outside");
            obj.set_readonly("true");
            obj.set_value("투비소프트");
            obj.set_usehelpertext("true");
            obj.set_footerheight("28");
            obj.set_displaynulltext("내용을 입력해주세요");
            obj.set_invalidtext("내용을 확인해주세요");
            obj.set_helpertext("내용을 입력해주세요");
            obj.set_contentheight("48");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08_02","0","2180","230","139",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit06_02\"/><PanelItem id=\"PanelItem01\" componentid=\"TextField00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit06_03","0","2308","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField00_03","10","42","100%","107",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_labeltext("레이블");
            obj.set_headerheight("31");
            obj.set_labelfloatingfixed("true");
            obj.set_labelposition("outside");
            obj.set_value("투비소프트");
            obj.set_cssclass("essential");
            obj.set_footerheight("28");
            obj.set_usehelpertext("true");
            obj.set_displaynulltext("내용을 입력해주세요");
            obj.set_invalidtext("내용을 확인해주세요");
            obj.set_helpertext("내용을 입력해주세요");
            obj.set_contentheight("48");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08_03","0","2308","230","139",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit06_03\"/><PanelItem id=\"PanelItem01\" componentid=\"TextField00_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08","0","Static05:16",null,"382","0",null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_horizontalgap("24");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel08_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel08_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel08_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel08_03\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel08_03_00\"/><PanelItem id=\"PanelItem05\" componentid=\"Panel08_03_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit06_03_00","0","2308","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("valid");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField00_03_00","10","42","100%","112",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_labeltext("레이블");
            obj.set_headerheight("31");
            obj.set_labelfloatingfixed("true");
            obj.set_labelposition("outside");
            obj.set_invalidtext("내용을 확인해주세요");
            obj.set_prefixtext("pre");
            obj.set_postfixtext("post");
            obj.set_pattern("투비소프트");
            obj.set_usehelpertext("true");
            obj.set_helpertext("내용이 확인되었습니다.");
            obj.set_usecharcount("true");
            obj.set_useleadingbutton("true");
            obj.set_usetrailingbutton("true");
            obj.set_displaynulltext("내용을 입력해주세요");
            obj.set_value("투비소프트");
            obj.set_contentheight("48");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08_03_00","50","184","230","139",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit06_03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"TextField00_03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit06_03_01","0","2308","230","32",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_text("invalid");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new TextField("TextField00_03_01","10","42","100%","79",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_labeltext("레이블");
            obj.set_headerheight("31");
            obj.set_labelfloatingfixed("true");
            obj.set_labelposition("outside");
            obj.set_useleadingbutton("true");
            obj.set_usehelpertext("true");
            obj.set_usecharcount("true");
            obj.set_helpertext("내용을 입력해주세요");
            obj.set_invalidtext("내용을 확인해주세요");
            obj.set_pattern("확인");
            obj.set_postfixtext("post");
            obj.set_prefixtext("pre");
            obj.set_usetrailingbutton("true");
            obj.set_value("투비소프트");
            obj.set_contentheight("48");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08_03_01","50","184","230","139",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit06_03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"TextField00_03_01\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit02.set_taborder("0");
                p.Edit02.set_flexgrow("1");
                p.Edit02.set_cssclass("edt_WF_Sch");
                p.Edit02.set_accessibilitylabel("검색");
                p.Edit02.set_value("가나다라마바사아자차카타파하");
                p.Edit02.move("0","0","100%","48",null,null);

                p.Button01.set_taborder("1");
                p.Button01.set_cssclass("btn_WF_EdtSch");
                p.Button01.set_accessibilitylabel("검색");
                p.Button01.move(null,"4","40","40","4",null);
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

            	}
            );
            this.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit02.set_taborder("0");
                p.Edit02.set_flexgrow("1");
                p.Edit02.set_cssclass("edt_WF_SchE");
                p.Edit02.set_accessibilitylabel("검색");
                p.Edit02.set_value("가나다라마바사아자차카타파하");
                p.Edit02.move("0","0","100%","48",null,null);

                p.Button01.set_taborder("1");
                p.Button01.set_cssclass("btn_WF_EdtSch");
                p.Button01.set_accessibilitylabel("검색");
                p.Button01.move(null,"4","40","40","4",null);
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

            	}
            );
            this.Div00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,4700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("guide01.xfdl", function() {


        this.guide01_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        this.staSubtit_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.guide01_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_02.addEventHandler("onclick",this.Div00_Static00_00_00_onclick,this);
            this.staSubtit.addEventHandler("onclick",this.staSubtit_onclick,this);
            this.stades01.addEventHandler("onclick",this.stades01_onclick,this);
            this.Edit01.addEventHandler("onchanged",this.Edit01_onchanged,this);
            this.Div00.form.Edit02.addEventHandler("onchanged",this.Div00_Edit02_onchanged,this);
            this.Div00_00.form.Edit02.addEventHandler("onchanged",this.Div00_Edit02_onchanged,this);
            this.Static04.addEventHandler("onclick",this.Static04_onclick,this);
        };
        this.loadIncludeScript("guide01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
