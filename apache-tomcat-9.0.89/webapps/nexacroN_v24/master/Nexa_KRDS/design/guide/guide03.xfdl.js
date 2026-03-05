(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide03");
            this.set_titletext("btn, chk, rdo, tab, pmnu, file, grd, div, pdiv, pgb, img");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,6611);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new PopupMenu("PopupMenu00","40","4412","220","148",null,null,null,null,null,null,this);
            obj.set_captioncolumn("captioncolumn");
            obj.set_checkboxcolumn("checkboxcolumn");
            obj.set_enablecolumn("enablecolumn");
            obj.set_hotkeycolumn("hotkeycolumn");
            obj.set_iconcolumn("iconcolumn");
            obj.set_idcolumn("idcolumn");
            obj.set_levelcolumn("levelcolumn");
            obj.set_userdatacolumn("userdatacolumn");
            var PopupMenu00_innerdataset = new nexacro.NormalDataset("PopupMenu00_innerdataset", obj);
            PopupMenu00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "captioncolumn","size" : "256"},{"id" : "checkboxcolumn","size" : "256"},{"id" : "enablecolumn","size" : "256"},{"id" : "hotkeycolumn","size" : "256"},{"id" : "iconcolumn","size" : "256"},{"id" : "idcolumn","size" : "256"},{"id" : "levelcolumn","size" : "256"},{"id" : "userdatacolumn","size" : "256"}]},"Rows" : [{"idcolumn" : "투비소프트","hotkeycolumn" : "hotkey","captioncolumn" : "투비소프트","levelcolumn" : "0","checkboxcolumn" : "true"},{"idcolumn" : "투비소프트","captioncolumn" : "투비소프트","levelcolumn" : "0"},{"captioncolumn" : "투비소프트","levelcolumn" : "1","userdatacolumn" : "1"},{"captioncolumn" : "투비소프트","levelcolumn" : "1","userdatacolumn" : "1"},{"idcolumn" : "투비소프트","captioncolumn" : "투비소프트","levelcolumn" : "0"},{"idcolumn" : "투비소프트","captioncolumn" : "투비소프트","levelcolumn" : "0"}]});
            obj.set_innerdataset(PopupMenu00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("staH2","0","0","200","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("컴포넌트 03");
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
            obj.set_text("btn, chk, rdo, tab, pmnu, file, grd, div, pdiv, pgb, img");
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
            obj.set_text("Button");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staTit00_00","0","222","808","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("기본");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit03_00","0","36","100%","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("KRDS Tertiary 버튼으로 기본으로 쓰이는 기본버튼으로 사용한다. 2글자(W:78px) 이상 시 한글자(+17px)씩 더한다.");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit00_02","40","123","75.12376237623762%","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","0","0","78","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("버튼");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","40","312","120","80",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit00_03","50","133","75.12376237623762%","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","10","10","78","48",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("버튼");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","50","133","120","80",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit00_03_00","40","123","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Grid Control");
            obj.set_cssclass("sta_WF_Subtit15");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","320","373","112","48",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("커스텀버튼");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02","0","0","48","48",null,null,null,null,"48",null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_03","10","42","48","48",null,null,null,null,"48",null,this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_Minus");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_04","108","10","141","48",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_04_00","206","10","166","48",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_ExcelDown");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_05","0","20","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_horizontalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem05\" componentid=\"Button00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_04\"/><PanelItem id=\"PanelItem03\" componentid=\"Button00_04_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","150","10","68.68811881188118%","80",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit00_03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","40","84","100%","80",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_03\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","staTit:16",null,"243","0",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_type("vertical");
            obj.set_spacing("40px");
            obj.set_verticalgap("8");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTit00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"staSubtit03_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit03_00","0","222","100%","36",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("CRUD");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit03_00_00","10","10","100%","31",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("KRDS Primary 버튼의 상위 계층으로 CRUD 사용을 위해 사용되는 버튼이다.");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel25","40","40","100%","67",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTit03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"staSubtit03_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit02_01_00","40","123","75.12376237623762%","32",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","0","0","80","48",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_01","40","312","140","80",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit02_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit02_00_00_00","50","133","75.12376237623762%","32",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00","10","10","80","48",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("조회");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_02","50","133","140","80",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit02_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit02_00_00_00_00","50","133","200","32",null,null,"200",null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("사이즈 / 간격 / 활용예시");
            obj.set_cssclass("sta_WF_Subtit15");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_00","252","0","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("생성");
            obj.set_cssclass("btn_WF_CrudNew");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01_00","350","0","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CrudModify");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_02","448","0","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CrudSave");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01","108","10","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CrudDelete");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_04","0","0","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_horizontalgap("8");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Button02_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Button02_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button02_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button02_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_03","320","1112","47.524752475247524%","80",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit02_00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03_00","40","123","100%","80",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel03_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel03_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","0","Panel00:16",null,"243","0",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_type("vertical");
            obj.set_spacing("40px");
            obj.set_verticalgap("8");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel25\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit01","0","222","100%","36",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("CRUD01");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit01_00","10","10","100%","31",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("KRDS Primary 버튼으로, (CRUD의 바로 하위계층) 중요시되는 동작에 동일하게 사용된다.");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel26","40","40","100%","67",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTit01\"/><PanelItem id=\"PanelItem01\" componentid=\"staSubtit01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit02","40","123","75.12376237623762%","32",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","0","0","78","48",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Crud01");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_01","40","312","140","80",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit02_00","50","133","75.12376237623762%","32",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","10","10","78","48",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("버튼");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_Crud01");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_02","50","133","140","80",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit02_03","60","143","75.12376237623762%","32",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("사이즈 / 간격 / 활용예시");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_08","20","20","78","48",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_08_00","10","42","78","48",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Crud01");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_04","0","20","73.83177570093459%","48",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_horizontalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_08\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01_08_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_03","320","814","214","80",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit02_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","40","123","100%","80",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Panel03:16",null,"243","0",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_type("vertical");
            obj.set_spacing("40px");
            obj.set_verticalgap("8");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel26\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit02","0","222","100%","36",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("Search");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit02_01","40","123","75.12376237623762%","32",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","0","0","128","48",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Sch");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_01","40","312","140","80",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit02_02","50","133","75.12376237623762%","32",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","10","10","128","48",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("조회하기");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_Sch");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_02","50","133","140","80",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit02_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit02_03_00","60","143","75.12376237623762%","32",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("사이즈 / 간격 / 활용예시");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_08_01","20","20","128","48",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Sch");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_08_00_00","10","42","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("btn_WF_Reset");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_04_00","0","20","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_horizontalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01_08_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01_08_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_03_00","290","10","214","80",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit02_03_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_04_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02_00","40","123","100%","80",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_horizontalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01_03_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","Panel01:16",null,"204","0",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_type("vertical");
            obj.set_spacing("40px");
            obj.set_verticalgap("8");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staTit02\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit04","0","222","100%","36",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("Custom");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit03_00_01","50","94","100%","31",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("KRDS Secondary 버튼으로 Custom으로 사용되는 버튼이다.");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel27","40","40","100%","67",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTit04\"/><PanelItem id=\"PanelItem01\" componentid=\"staSubtit03_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit04_02","40","123","75.12376237623762%","32",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_01","0","0","80","48",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_01","40","312","140","80",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit04_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button04_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit04_03","50","133","75.12376237623762%","32",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_02","10","10","80","48",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("버튼");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_Custom");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_02","50","133","140","80",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit04_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Button04_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04_00","40","123","100%","80",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel04_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","Panel02:16",null,"243","0",null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_type("vertical");
            obj.set_spacing("40px");
            obj.set_verticalgap("8");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel27\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel04_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit05","10","232","100%","36",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("Text");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit03_00_01_00","50","94","100%","31",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("KRDS Text 버튼으로 동일하게 사용되는 버튼이다.");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel23","40","40","100%","67",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_verticalgap("8");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTit05\"/><PanelItem id=\"PanelItem01\" componentid=\"staSubtit03_00_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_01","60","143","75.12376237623762%","32",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","0","0","90","34",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("텍스트버튼");
            obj.set_cssclass("btn_WF_Txt");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_01","40","312","120","64",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_02","70","153","75.12376237623762%","32",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button05_00","10","10","90","34",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("텍스트버튼");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_Txt");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_02","50","133","120","64",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button05_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05_00","50","133","100%","66",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel05_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel05_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel05","0","Panel04:16",null,"204","0",null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_type("vertical");
            obj.set_spacing("40px");
            obj.set_verticalgap("8");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel23\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel05_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit06","20","242","100%","36",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("Input 내 검색버튼");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_01_00","40","123","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button05_01","0","0","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_cssclass("btn_WF_EdtSch");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06_00","40","312","120","80",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button05_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_01_00_01","50","133","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button05_01_01","10","10","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_cssclass("btn_WF_EdtSch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06_01","10","10","120","80",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button05_01_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_01_00_01_00","340","1850","321","32",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("사이즈 / 간격 / 활용예시 (edt_WF_Sch)");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","40","148","250","48",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","0","0",null,"48","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_Sch");
            obj.set_flexgrow("1");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01",null,"4","40","40","4",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel06_02","40","172","300","80",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_01_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Div01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel06","0","Panel05:16",null,"204","0",null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_type("horizontal");
            obj.set_spacing("40px");
            obj.set_verticalgap("16");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staTit06\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel06_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel06_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit07","30","252","100%","36",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("별도 검색버튼");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_01_00_00","80","163","75.12376237623762%","32",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button05_01_00","20","20","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_cssclass("btn_WF_EdtSchL");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_02","0","20","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button05_01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_01","50","322","120","80",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_01_00_00_01","90","173","75.12376237623762%","32",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button05_01_00_01","30","30","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_cssclass("btn_WF_EdtSchL");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_04","10","30","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button05_01_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_03","20","20","120","80",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_01_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_01_00_01_00_00","350","1860","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("사이즈 / 간격 / 활용예시 ");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","280","2102","228","48",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_format("@@@-@@@@-@@@@");
            obj.set_value("010123456789");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Button("Button05_01_00_02","40","40","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_cssclass("btn_WF_EdtSchL");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_06","0","20","276","48",null,null,"276",null,null,null,this);
            obj.set_taborder("116");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"MaskEdit00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button05_01_00_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07_05","350","94","280","80",null,null,"280",null,null,null,this);
            obj.set_taborder("117");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_01_00_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07_06\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel07","0","Panel06:16",null,"204","0",null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_type("horizontal");
            obj.set_spacing("40px");
            obj.set_verticalgap("16");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staTit07\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel07_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel07_03\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel07_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit08","40","262","100%","36",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("Shuttle");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_01_00_00_00","100","183","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button05_01_00_00","50","50","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_cssclass("btn_WF_Left");
            this.addChild(obj.name, obj);

            obj = new Button("Button05_02_00_00","10","42","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_cssclass("btn_WF_Right");
            this.addChild(obj.name, obj);

            obj = new Button("Button05_03_01_00","66","10","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_cssclass("btn_WF_Up");
            this.addChild(obj.name, obj);

            obj = new Button("Button05_03_00_00_00","122","10","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_cssclass("btn_WF_Down");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08_02","0","20","216","48",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button05_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button05_02_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button05_03_01_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Button05_03_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08_01","40","312","220","80",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel08_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit05_01_00_00_00_01","110","193","120","32",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button05_01_00_00_00","60","60","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_cssclass("btn_WF_Left");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button05_02_00_00_00","20","52","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_cssclass("btn_WF_Right");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button05_03_01_00_00","76","20","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_cssclass("btn_WF_Up");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button05_03_00_00_00_00","132","20","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_cssclass("btn_WF_Down");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08_04","10","30","216","48",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button05_01_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button05_02_00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button05_03_01_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Button05_03_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08_03","10","10","220","80",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit05_01_00_00_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel08_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel08","0","Panel07:16",null,"204","0",null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_type("horizontal");
            obj.set_verticalgap("16");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj.set_spacing("40px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem02\" componentid=\"staTit08\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel08_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel08_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit09","50","272","100%","36",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("Page nation");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit09","100","0","75.12376237623762%","17",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_05","114","0","62","40",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("이전");
            obj.set_cssclass("btn_WF_PgPrev");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01","184","0","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_PgNumS");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","232","0","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01_00","280","0","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_02","328","0","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_03","376","0","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_04","424","0","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_05","472","0","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_06","520","0","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_07","568","0","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","616","0","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_cssclass("sta_WF_Ellipsis");
            obj.set_visible("true");
            obj.set_accessibilitylabel("줄임");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_07_01","664","0","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_text("99");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","712","0","62","40",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_text("다음");
            obj.set_cssclass("btn_WF_PgNext");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09_01","40","2379","660","40",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_05\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_00_00\"/><PanelItem id=\"PanelItem03\" componentid=\"Button01_01_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Button01_02\"/><PanelItem id=\"PanelItem05\" componentid=\"Button01_03\"/><PanelItem id=\"PanelItem06\" componentid=\"Button01_04\"/><PanelItem id=\"PanelItem07\" componentid=\"Button01_05\"/><PanelItem id=\"PanelItem08\" componentid=\"Button01_06\"/><PanelItem id=\"PanelItem09\" componentid=\"Button01_07\"/><PanelItem id=\"PanelItem10\" componentid=\"Static00\"/><PanelItem id=\"PanelItem11\" componentid=\"Button01_07_01\"/><PanelItem id=\"PanelItem12\" componentid=\"Button00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","246","322","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_displaynulltext("1");
            obj.set_visible("true");
            obj.set_accessibilitylabel("페이지");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","302","325","56","34",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_text("/22");
            obj.set_cssclass("sta_WF_Pg15R");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00","358","322","64","40",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_text("이동");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_visible("true");
            obj.set_accessibilitylabel("페이지");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09_02","658","0","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Edit00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_00_00_00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09_00","40","2379","100%","96",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj.set_verticalgap("24");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel09_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel09_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel09","0","Panel08:16",null,"260","0",null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_type("vertical");
            obj.set_spacing("40px");
            obj.set_verticalgap("8");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staTit09\"/><PanelItem id=\"PanelItem03\" componentid=\"staSubtit09\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel09_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit10","0","Panel09:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit10_02","40","123","150","32",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","51","2743","77","48",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_text("체크");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00","10","42","77","48",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_text("체크");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel12_01","0","20","154","48",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox00\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel12_00","50","50","200","80",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSubtit10_02\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel12_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit10_02_00","50","133","150","32",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_01","61","2753","77","48",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_text("체크");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_00","20","52","77","48",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_text("체크");
            obj.set_enable("false");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel12_03","10","30","154","48",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel12_02","60","60","200","80",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSubtit10_02_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel12_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit10_02_01","60","143","150","32",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_02","71","2763","77","48",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_text("체크");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00_00_01","30","62","77","48",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_text("체크");
            obj.set_cssclass("essential");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel12_05","20","40","154","48",null,null,null,null,null,null,this);
            obj.set_taborder("171");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"CheckBox00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox00_00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel12_04","70","70","200","80",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSubtit10_02_01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel12_05\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel12","0","staTit10:16",null,"160","0",null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_horizontalgap("40");
            obj.set_spacing("40px");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel12_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel12_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel12_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit00","0","Panel12:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_text("CheckBoxSet");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit10","40","123","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_text("default(horizontal)");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00","40","3120","350","48",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var CheckBoxSet00_innerdataset = new nexacro.NormalDataset("CheckBoxSet00_innerdataset", obj);
            CheckBoxSet00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "체크세트"},{"codecolumn" : "1","datacolumn" : "체크세트"},{"codecolumn" : "2","datacolumn" : "체크세트","readonlycolumn" : "true"}]});
            obj.set_innerdataset(CheckBoxSet00_innerdataset);
            obj.set_text("체크세트");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel10_00","40","123","100%","80",null,null,null,null,null,null,this);
            obj.set_taborder("177");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSubtit10\"/><PanelItem id=\"PanelItem00\" componentid=\"CheckBoxSet00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit10_00","50","133","100%","32",null,null,null,null,null,null,this);
            obj.set_taborder("178");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00_01","40","3240","350","48",null,null,null,null,null,null,this);
            obj.set_taborder("179");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_cssclass("essential");
            var CheckBoxSet00_01_innerdataset = new nexacro.NormalDataset("CheckBoxSet00_01_innerdataset", obj);
            CheckBoxSet00_01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "체크세트"},{"codecolumn" : "1","datacolumn" : "체크세트"},{"codecolumn" : "2","datacolumn" : "체크세트","readonlycolumn" : "true"}]});
            obj.set_innerdataset(CheckBoxSet00_01_innerdataset);
            obj.set_text("체크세트");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel10_01","50","50","100%","80",null,null,null,null,null,null,this);
            obj.set_taborder("180");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSubtit10_00\"/><PanelItem id=\"PanelItem00\" componentid=\"CheckBoxSet00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit10_01","40","123","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("181");
            obj.set_text("vertical");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00_00","161","2839","111","96",null,null,null,null,null,null,this);
            obj.set_taborder("182");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonlycolumn("readonlycolumn");
            obj.set_direction("vertical");
            var CheckBoxSet00_00_innerdataset = new nexacro.NormalDataset("CheckBoxSet00_00_innerdataset", obj);
            CheckBoxSet00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"},{"id" : "readonlycolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "체크세트"},{"codecolumn" : "1","datacolumn" : "체크세트"}]});
            obj.set_innerdataset(CheckBoxSet00_00_innerdataset);
            obj.set_text("체크세트");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel10_02","524","40","200","120",null,null,null,null,null,null,this);
            obj.set_taborder("183");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSubtit10_01\"/><PanelItem id=\"PanelItem00\" componentid=\"CheckBoxSet00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel10","0","staTit00:16",null,"440","0",null,null,null,null,null,this);
            obj.set_taborder("184");
            obj.set_type("vertical");
            obj.set_spacing("40px");
            obj.set_verticalgap("40");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_fittocontents("height");
            obj.set_horizontalgap("40");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel10_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel10_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel10_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit11","0","Panel10:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("185");
            obj.set_text("Radio");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit11","50","133","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("186");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","473","3378","189","48",null,null,null,null,null,null,this);
            obj.set_taborder("187");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "선택"},{"codecolumn" : "1","datacolumn" : "미선택"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel11_00","50","50","200","80",null,null,null,null,null,null,this);
            obj.set_taborder("188");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSubtit11\"/><PanelItem id=\"PanelItem02\" componentid=\"Radio00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit11_00","60","143","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("189");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_00","483","3388","189","48",null,null,null,null,null,null,this);
            obj.set_taborder("190");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("false");
            var Radio00_00_innerdataset = new nexacro.NormalDataset("Radio00_00_innerdataset", obj);
            Radio00_00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "선택"},{"codecolumn" : "1","datacolumn" : "미선택"}]});
            obj.set_innerdataset(Radio00_00_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel11_01","60","60","200","80",null,null,null,null,null,null,this);
            obj.set_taborder("191");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSubtit11_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Radio00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit11_01","70","153","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("192");
            obj.set_text("essential");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00_01","493","3398","189","48",null,null,null,null,null,null,this);
            obj.set_taborder("193");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("essential");
            var Radio00_01_innerdataset = new nexacro.NormalDataset("Radio00_01_innerdataset", obj);
            Radio00_01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "선택"},{"codecolumn" : "1","datacolumn" : "미선택"}]});
            obj.set_innerdataset(Radio00_01_innerdataset);
            obj.set_text("선택");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel11_02","70","70","200","80",null,null,null,null,null,null,this);
            obj.set_taborder("194");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSubtit11_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Radio00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel11","0","staTit11:16",null,"160","0",null,null,null,null,null,this);
            obj.set_taborder("195");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_horizontalgap("40");
            obj.set_spacing("40px");
            obj.set_verticalgap("40");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel11_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel11_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel11_02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit11_00","0","Panel11:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("196");
            obj.set_text("Tab");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit13","50","133","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("197");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","967","1631","100%","56",null,null,null,null,null,null,this);
            obj.set_taborder("198");
            obj.set_tabindex("0");
            obj.set_selectedtabbuttonheight("56");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("Tabpage3");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("Tabpage4");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00);
            obj.set_text("Tabpage5");
            this.Tab00.addChild(obj.name, obj);

            obj = new Panel("Panel13_00","50","50","300","96",null,null,null,null,null,null,this);
            obj.set_taborder("199");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj.set_fittocontents("none");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSubtit13\"/><PanelItem id=\"PanelItem00\" componentid=\"Tab00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit13_00","60","143","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("200");
            obj.set_text("showextrabutton : true");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab01","977","1641","100%","56",null,null,null,null,null,null,this);
            obj.set_taborder("201");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            obj.set_selectedtabbuttonheight("56");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab01);
            obj.set_text("Tabpage1");
            this.Tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab01);
            obj.set_text("Tabpage2");
            this.Tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab01);
            obj.set_text("Tabpage3");
            this.Tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab01);
            obj.set_text("Tabpage4");
            this.Tab01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab01);
            obj.set_text("Tabpage5");
            this.Tab01.addChild(obj.name, obj);

            obj = new Panel("Panel13_01","60","60","300","96",null,null,null,null,null,null,this);
            obj.set_taborder("202");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSubtit13_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Tab01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit13_00_00","40","4042","290","32",null,null,null,null,null,null,this);
            obj.set_taborder("203");
            obj.set_text("tabjustify : false( default | 업무화면 기본)");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab01_00","987","1651","100%","56",null,null,null,null,null,null,this);
            obj.set_taborder("204");
            obj.set_tabindex("0");
            obj.set_selectedtabbuttonheight("56");
            obj.set_tabjustify("false");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab01_00);
            obj.set_text("Tabpage1");
            this.Tab01_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab01_00);
            obj.set_text("Tabpage2");
            this.Tab01_00.addChild(obj.name, obj);

            obj = new Panel("Panel13_02","474","50","300","96",null,null,null,null,null,null,this);
            obj.set_taborder("205");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSubtit13_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Tab01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit13_00_00_00","70","153","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("206");
            obj.set_text("tabjustify : true");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab01_00_00","10","42","100%","56",null,null,null,null,null,null,this);
            obj.set_taborder("207");
            obj.set_tabindex("0");
            obj.set_selectedtabbuttonheight("56");
            obj.set_tabjustify("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab01_00_00);
            obj.set_text("Tabpage1");
            this.Tab01_00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab01_00_00);
            obj.set_text("Tabpage2");
            this.Tab01_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel13_03","50","186","300","96",null,null,null,null,null,null,this);
            obj.set_taborder("208");
            obj.set_type("vertical");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"staSubtit13_00_00_00\"/><PanelItem id=\"PanelItem00\" componentid=\"Tab01_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel13","0","staTit11_00:16",null,"312","0",null,null,null,null,null,this);
            obj.set_taborder("209");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_horizontalgap("40");
            obj.set_spacing("40px");
            obj.set_verticalgap("40");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel13_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel13_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel13_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel13_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit11_00_00","0","Panel13:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("210");
            obj.set_text("PopupMenu");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","318","4600","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("211");
            obj.set_text("팝업메뉴");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel14","0","staTit11_00_00:24",null,"278","0",null,null,null,null,null,this);
            obj.set_taborder("212");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_horizontalgap("40");
            obj.set_spacing("40px");
            obj.set_verticalgap("0");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button04\"/><PanelItem id=\"PanelItem02\" componentid=\"PopupMenu00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit11_00_00_00","0","Panel14:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("213");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            obj.set_text("File");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit13_01","10","10","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("214");
            obj.set_text("FileUpload_default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00","40","4834","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("215");
            obj.set_buttonsize("106");
            obj.set_itemheight("48");
            obj.set_buttontext("파일업로드");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel15","40","71","280","80",null,null,null,null,null,null,this);
            obj.set_taborder("216");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit13_01\"/><PanelItem id=\"PanelItem01\" componentid=\"FileUpload00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit13_01_00","20","20","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("217");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00_00","50","4844","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("218");
            obj.set_buttonsize("106");
            obj.set_itemheight("48");
            obj.set_buttontext("파일업로드");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel15_00","50","81","280","80",null,null,null,null,null,null,this);
            obj.set_taborder("219");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit13_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"FileUpload00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel17","40","87","100%","80",null,null,null,null,null,null,this);
            obj.set_taborder("220");
            obj.set_horizontalgap("40");
            obj.set_verticalgap("24");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel15\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel15_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit13_01_01","30","30","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("221");
            obj.set_text("FileDownload_default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","269","5153","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("222");
            obj.set_text("파일다운로드");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel15_01","50","97","320","80",null,null,null,null,null,null,this);
            obj.set_taborder("223");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit13_01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"FileDownload00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit13_01_00_00","40","40","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("224");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00_00","10","42","120","48",null,null,null,null,null,null,this);
            obj.set_taborder("225");
            obj.set_text("파일다운로드");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel15_00_00","50","193","320","80",null,null,null,null,null,null,this);
            obj.set_taborder("226");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit13_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"FileDownload00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel16_00","40","326","100%","80",null,null,null,null,null,null,this);
            obj.set_taborder("227");
            obj.set_horizontalgap("40");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel15_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel15_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel14_00","0","staTit11_00_00_00:16",null,"280","0",null,null,null,null,null,this);
            obj.set_taborder("228");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_horizontalgap("40");
            obj.set_spacing("40px");
            obj.set_verticalgap("24");
            obj.set_type("vertical");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Panel17\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel16_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit11_00_00_00_00","0","Panel14_00:80",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("229");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            obj.set_text("GroupBox");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit13_01_01_00","50","50","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("230");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","132","5375","100%","168",null,null,null,null,null,null,this);
            obj.set_taborder("231");
            obj.set_text("그룹박스");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel19","40","40","280","200",null,null,null,null,null,null,this);
            obj.set_taborder("232");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit13_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"GroupBox00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit13_01_01_00_00","60","60","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("233");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00_00","142","5385","100%","168",null,null,null,null,null,null,this);
            obj.set_taborder("234");
            obj.set_text("그룹박스");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel19_00","50","50","280","200",null,null,null,null,null,null,this);
            obj.set_taborder("235");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit13_01_01_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"GroupBox00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel18","0","staTit11_00_00_00_00:16",null,"280","0",null,null,null,null,null,this);
            obj.set_taborder("236");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_spacing("40px");
            obj.set_horizontalgap("40");
            obj.set_verticalgap("24");
            obj.set_type("horizontal");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel19\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel19_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit11_00_00_00_00_00","0","Panel18:80",null,"48","40",null,null,null,null,null,this);
            obj.set_taborder("237");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            obj.set_text("Div/PopupDiv");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","122","5754","100%","52",null,null,null,null,null,null,this);
            obj.set_taborder("238");
            obj.set_text("Div/PopupDiv는 일반적인 사용은 Form을 로드해서 사용하거나 컴포넌트를 직접 정렬시키는 경우나 그룹핑이 대부분이며, 디자인 요소가 필요할 경우, Class로 지정해서 사용");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel20","0","staTit11_00_00_00_00_00:16",null,"132","0",null,null,null,null,null,this);
            obj.set_taborder("239");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_horizontalgap("40");
            obj.set_spacing("40px");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit11_00_00_00_00_00_00","0","Panel20:80",null,"56","41",null,null,null,null,null,this);
            obj.set_taborder("240");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            obj.set_text("ProgressBar");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit13_01_01_00_01","10","10","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("241");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","135","6083","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("242");
            obj.set_text("45%");
            obj.set_smooth("true");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("45");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel19_01","50","50","280","80",null,null,null,null,null,null,this);
            obj.set_taborder("243");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit13_01_01_00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"ProgressBar00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit13_01_01_00_01_00","20","20","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("244");
            obj.set_text("disabled");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar01","145","6093","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("245");
            obj.set_text("45%");
            obj.set_smooth("true");
            obj.set_enable("false");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("45");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel19_01_00","60","60","280","80",null,null,null,null,null,null,this);
            obj.set_taborder("246");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit13_01_01_00_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"ProgressBar01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit13_01_01_00_01_02","30","30","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("247");
            obj.set_text("KRDS_Prograss / active");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00_00","135","6083","100%","4",null,null,null,null,null,null,this);
            obj.set_taborder("248");
            obj.set_smooth("true");
            obj.set_cssclass("pgb_WF_Radius");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("45");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","674","6089","100%","28",null,null,null,null,null,null,this);
            obj.set_taborder("249");
            obj.set_text("메세지를 입력해주세요");
            obj.set_cssclass("sta_WF_helpBL");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel24","0","32","200","36",null,null,null,null,null,null,this);
            obj.set_taborder("250");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ProgressBar00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel19_01_02","50","50","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("251");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit13_01_01_00_01_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel24\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit13_01_01_00_01_02_00","40","40","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("252");
            obj.set_text("KRDS_Prograss / success");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00_00_00","145","6093","100%","4",null,null,null,null,null,null,this);
            obj.set_taborder("253");
            obj.set_smooth("true");
            obj.set_cssclass("pgb_WF_Success");
            obj.set_min("100");
            obj.set_max("100");
            obj.set_pos("100");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","684","6099","100%","28",null,null,null,null,null,null,this);
            obj.set_taborder("254");
            obj.set_text("메세지를 입력해주세요");
            obj.set_cssclass("sta_WF_helpvaild");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel24_00","10","42","200","36",null,null,null,null,null,null,this);
            obj.set_taborder("255");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ProgressBar00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel19_01_02_00","530","50","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("256");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit13_01_01_00_01_02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel24_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit13_01_01_00_01_02_00_00","50","50","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("257");
            obj.set_text("KRDS_Prograss / error");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00_00_00_00","155","6103","100%","4",null,null,null,null,null,null,this);
            obj.set_taborder("258");
            obj.set_smooth("true");
            obj.set_cssclass("pgb_WF_Error");
            obj.set_min("100");
            obj.set_max("100");
            obj.set_pos("100");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","694","6109","100%","28",null,null,null,null,null,null,this);
            obj.set_taborder("259");
            obj.set_text("메세지를 입력해주세요");
            obj.set_cssclass("sta_WF_helpinvaild");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel24_00_00","20","52","200","36",null,null,null,null,null,null,this);
            obj.set_taborder("260");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"ProgressBar00_00_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static02_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel19_01_02_00_00","290","154","230","80",null,null,null,null,null,null,this);
            obj.set_taborder("261");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit13_01_01_00_01_02_00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel24_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel21","0","staTit11_00_00_00_00_00_00:16",null,"264","0",null,null,null,null,null,this);
            obj.set_taborder("262");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_horizontalgap("40");
            obj.set_spacing("40px");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel19_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel19_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel19_01_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Panel19_01_02_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Panel19_01_02_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staTit11_00_00_00_00_00_00_00","0","Panel21:80",null,"56","0",null,null,null,null,null,this);
            obj.set_taborder("263");
            obj.set_cssclass("sta_WF_ParaH2_pc");
            obj.set_text("ImageViwer");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit13_01_01_00_01_01","10","10","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("264");
            obj.set_text("default");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","160","6343","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("265");
            obj.set_stretch("none");
            obj.set_image("url(\'theme::NexaKRDS/images/tobesoftLogo.png\')");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel19_01_01","50","50","200","90",null,null,null,null,null,null,this);
            obj.set_taborder("266");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit13_01_01_00_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"ImageViewer00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit13_01_01_00_01_01_00","300","6292","240","32",null,null,null,null,null,null,this);
            obj.set_taborder("267");
            obj.set_text("strech : fixaspectratio(png해당)");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_00","280","6491","104","40",null,null,null,null,null,null,this);
            obj.set_taborder("268");
            obj.set_stretch("fixaspectratio");
            obj.set_image("url(\'theme::NexaKRDS/images/tobesoftLogo.png\')");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel19_01_01_00","300","6292","220","90",null,null,null,null,null,null,this);
            obj.set_taborder("269");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit13_01_01_00_01_01_00\"/><PanelItem id=\"PanelItem01\" componentid=\"ImageViewer00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("staSubtit13_01_01_00_01_01_01","20","20","200","32",null,null,null,null,null,null,this);
            obj.set_taborder("270");
            obj.set_text("strech : fit(png해당)");
            obj.set_cssclass("sta_WF_Subtit15");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00_01","560","6320","110","80",null,null,null,null,null,null,this);
            obj.set_taborder("271");
            obj.set_stretch("fit");
            obj.set_text("");
            obj.set_image("url(\'theme::NexaKRDS/images/tobesoftLogo.png\')");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel19_01_01_01","560","6292","200","115",null,null,null,null,null,null,this);
            obj.set_taborder("272");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSubtit13_01_01_00_01_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"ImageViewer00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel22","0","staTit11_00_00_00_00_00_00_00:16",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("273");
            obj.set_cssclass("pnl_WF_Gbox");
            obj.set_horizontalgap("40");
            obj.set_spacing("40px");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel19_01_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel19_01_01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel19_01_01_01\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit03.set_taborder("0");
                p.Edit03.set_cssclass("edt_WF_Sch");
                p.Edit03.set_flexgrow("1");
                p.Edit03.move("0","0",null,"48","0",null);

                p.Button01.set_taborder("1");
                p.Button01.set_cssclass("btn_WF_EdtSch");
                p.Button01.move(null,"4","40","40","4",null);
            	}
            );
            this.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div01.form
            obj = new Layout("Layout0","",0,0,this.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Tab00.Tabpage1
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage3.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage3.form,function(p){});
            this.Tab00.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage4.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage4.form,function(p){});
            this.Tab00.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage5.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage5.form,function(p){});
            this.Tab00.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01.Tabpage1
            obj = new Layout("default","",0,0,this.Tab01.Tabpage1.form,function(p){});
            this.Tab01.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01.Tabpage2
            obj = new Layout("default","",0,0,this.Tab01.Tabpage2.form,function(p){});
            this.Tab01.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01.Tabpage3.form
            obj = new Layout("default","",0,0,this.Tab01.Tabpage3.form,function(p){});
            this.Tab01.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01.Tabpage4.form
            obj = new Layout("default","",0,0,this.Tab01.Tabpage4.form,function(p){});
            this.Tab01.Tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01.Tabpage5.form
            obj = new Layout("default","",0,0,this.Tab01.Tabpage5.form,function(p){});
            this.Tab01.Tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01_00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab01_00.Tabpage1.form,function(p){});
            this.Tab01_00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01_00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab01_00.Tabpage2.form,function(p){});
            this.Tab01_00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01_00_00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab01_00_00.Tabpage1.form,function(p){});
            this.Tab01_00_00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab01_00_00.Tabpage2.form
            obj = new Layout("default","",0,0,this.Tab01_00_00.Tabpage2.form,function(p){});
            this.Tab01_00_00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,6611,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("guide03.xfdl", function() {


        this.guide03_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };


        this.Button04_onclick = function(obj,e)
        {
        	var nX = obj.getOffsetLeft();
        	var nY = obj.getOffsetTop() + obj.getOffsetHeight();

        	this.PopupMenu00.trackPopup(nX, nY);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.guide03_onload,this);
            this.staTit01.addEventHandler("onclick",this.staTit01_onclick,this);
            this.Button05_02_00_00.addEventHandler("onclick",this.Button05_02_00_00_onclick,this);
            this.Button05_02_00_00_00.addEventHandler("onclick",this.Button05_02_00_00_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
        };
        this.loadIncludeScript("guide03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
