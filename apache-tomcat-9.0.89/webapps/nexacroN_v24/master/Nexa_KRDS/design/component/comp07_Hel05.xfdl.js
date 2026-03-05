(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("hel05");
            this.set_titletext("도움_툴팁");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,2950);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","72","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("툴팁");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDIvider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDIvider:15","0","83","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Tooltip");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            obj.set_text("툴팁은 요소나 본문 텍스트에 제공되는 짧은 부가 설명이다. 설명이 필요한 대상 또는 별도의 활성화 버튼에 마우스를 올리거나 초점을 이동했을 때 설명 텍스트가 표시된다.");
            this.addChild(obj.name, obj);

            obj = new Div("Div02_00_02","0","Static01:83","217","37",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div02");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"31","0",null,null,null,null,null,this.Div02_00_02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_TtipBlack");
            obj.set_text("아이콘 버튼에 제공되는 툴팁");
            this.Div02_00_02.addChild(obj.name, obj);

            obj = new Static("Static01","101",null,"14","9",null,"0",null,null,null,null,this.Div02_00_02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_TtipDown");
            obj.set_accessibilityenable("false");
            this.Div02_00_02.addChild(obj.name, obj);

            obj = new Button("Button00",null,"3","24","24","2",null,null,null,null,null,this.Div02_00_02.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_Ttipclose");
            obj.set_accessibilitylabel("닫기");
            this.Div02_00_02.addChild(obj.name, obj);

            obj = new Button("Button00","63","Div02_00_02:10","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("툴팁");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","0","Button00:80","217","37",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div02");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"31","0",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_TtipBlack");
            obj.set_text("아이콘 버튼에 제공되는 툴팁");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","24",null,"14","9",null,"0",null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_TtipDown");
            obj.set_accessibilityenable("false");
            this.Div02.addChild(obj.name, obj);

            obj = new Button("Button00",null,"3","24","24","2",null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_Ttipclose");
            obj.set_accessibilitylabel("닫기");
            this.Div02.addChild(obj.name, obj);

            obj = new Div("Div02_00","0","Div02:50","217","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div02");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"31","0",null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_TtipBlack");
            obj.set_text("아이콘 버튼에 제공되는 툴팁");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Static("Static01","101",null,"14","9",null,"0",null,null,null,null,this.Div02_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_TtipDown");
            obj.set_accessibilityenable("false");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"3","24","24","2",null,null,null,null,null,this.Div02_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_Ttipclose");
            obj.set_accessibilitylabel("닫기");
            this.Div02_00.addChild(obj.name, obj);

            obj = new Div("Div02_00_00","0","Div02_00:50","217","37",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div02");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"31","0",null,null,null,null,null,this.Div02_00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_TtipBlack");
            obj.set_text("아이콘 버튼에 제공되는 툴팁");
            this.Div02_00_00.addChild(obj.name, obj);

            obj = new Static("Static01",null,null,"14","9","24","0",null,null,null,null,this.Div02_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_TtipDown");
            obj.set_accessibilityenable("false");
            this.Div02_00_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"3","24","24","2",null,null,null,null,null,this.Div02_00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_Ttipclose");
            obj.set_accessibilitylabel("닫기");
            this.Div02_00_00.addChild(obj.name, obj);

            obj = new Div("Div02_01","0","Div02_00_00:50","217","37",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div02");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","6",null,"31","0",null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_TtipBlack");
            obj.set_text("아이콘 버튼에 제공되는 툴팁");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Static("Static01","24","0","14","9",null,null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_TtipUp");
            obj.set_accessibilityenable("false");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Button("Button00",null,"9","24","24","2",null,null,null,null,null,this.Div02_01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_Ttipclose");
            obj.set_accessibilitylabel("닫기");
            this.Div02_01.addChild(obj.name, obj);

            obj = new Div("Div02_00_01","0","Div02_01:50","217","37",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div02");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","6",null,"31","0",null,null,null,null,null,this.Div02_00_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_TtipBlack");
            obj.set_text("아이콘 버튼에 제공되는 툴팁");
            this.Div02_00_01.addChild(obj.name, obj);

            obj = new Static("Static01","101","0","14","9",null,null,null,null,null,null,this.Div02_00_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_TtipUp");
            obj.set_accessibilityenable("false");
            this.Div02_00_01.addChild(obj.name, obj);

            obj = new Button("Button00",null,"9","24","24","2",null,null,null,null,null,this.Div02_00_01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_Ttipclose");
            obj.set_accessibilitylabel("닫기");
            this.Div02_00_01.addChild(obj.name, obj);

            obj = new Div("Div02_00_00_00","0","Div02_00_01:50","217","37",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Div02");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","6",null,"31","0",null,null,null,null,null,this.Div02_00_00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_TtipBlack");
            obj.set_text("아이콘 버튼에 제공되는 툴팁");
            this.Div02_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","14","9","24",null,null,null,null,null,this.Div02_00_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_TtipUp");
            obj.set_accessibilityenable("false");
            this.Div02_00_00_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"9","24","24","2",null,null,null,null,null,this.Div02_00_00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_Ttipclose");
            obj.set_accessibilitylabel("닫기");
            this.Div02_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div02_01_00_00","0","Div02_00_00_00:50","223","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Div02");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"31","6",null,null,null,null,null,this.Div02_01_00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_TtipBlack");
            obj.set_text("아이콘 버튼에 제공되는 툴팁");
            this.Div02_01_00_00.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","9","31","0",null,null,null,null,null,this.Div02_01_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_TtipRight");
            obj.set_accessibilityenable("false");
            this.Div02_01_00_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"3","24","24","8",null,null,null,null,null,this.Div02_01_00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_Ttipclose");
            obj.set_accessibilitylabel("닫기");
            this.Div02_01_00_00.addChild(obj.name, obj);

            obj = new Div("Div02_01_00","0","Div02_01_00_00:50","223","31",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Div02");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","6","0",null,"31","0",null,null,null,null,null,this.Div02_01_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_TtipBlack");
            obj.set_text("아이콘 버튼에 제공되는 툴팁");
            this.Div02_01_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","9","31",null,null,null,null,null,null,this.Div02_01_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_TtipLeft");
            obj.set_accessibilityenable("false");
            this.Div02_01_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"3","24","24","2",null,null,null,null,null,this.Div02_01_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_Ttipclose");
            obj.set_accessibilitylabel("닫기");
            this.Div02_01_00.addChild(obj.name, obj);

            obj = new Div("Div01_01_03_00","0","Div02_01_00:102","360","197",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","360",null,null,"11",null,null,null,null,this.Div01_01_03_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_01_03_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","169",null,"22","12",null,"0",null,null,null,null,this.Div01_01_03_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_DireDown");
            obj.set_accessibilityenable("false");
            this.Div01_01_03_00.addChild(obj.name, obj);

            obj = new Static("Static02","24","24",null,"144","48",null,null,null,null,null,this.Div01_01_03_00.form);
            obj.set_taborder("2");
            obj.set_text("툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다.");
            obj.set_cssclass("sta_POP_Infor15R");
            this.Div01_01_03_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","26","26","24",null,null,null,null,null,this.Div01_01_03_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_01_03_00.addChild(obj.name, obj);

            obj = new Button("Button01_00","168","Div01_01_03_00:4","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_HelpQu");
            obj.set_text("");
            obj.set_accessibilitylabel("물음표");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_01_03_00_00","0","Button01_00:50","360","197",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","360",null,null,"11",null,null,null,null,this.Div01_01_03_00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_01_03_00_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","169",null,"22","12",null,"0",null,null,null,null,this.Div01_01_03_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_DireDown");
            obj.set_accessibilityenable("false");
            this.Div01_01_03_00_00.addChild(obj.name, obj);

            obj = new Static("Static02","24","24",null,"144","48",null,null,null,null,null,this.Div01_01_03_00_00.form);
            obj.set_taborder("2");
            obj.set_text("툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다.");
            obj.set_cssclass("sta_POP_Infor15R");
            this.Div01_01_03_00_00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","26","26","24",null,null,null,null,null,this.Div01_01_03_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_01_03_00_00.addChild(obj.name, obj);

            obj = new Button("Button01","168","Div01_01_03_00_00:4","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_HelpEx");
            obj.set_accessibilitylabel("도움말");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01","216","Div01_01_03_00_00:4","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_Infor");
            obj.set_text("");
            obj.set_accessibilitylabel("도움말");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01_00","264","Div01_01_03_00_00:4","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_Tooltip");
            obj.set_text("");
            obj.set_accessibilitylabel("도움말");
            this.addChild(obj.name, obj);

            obj = new Div("Div01_01_03","0","Button01:80","360","197",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","360",null,null,"11",null,null,null,null,this.Div01_01_03.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_01_03.addChild(obj.name, obj);

            obj = new Static("Static00_00","169",null,"22","12",null,"0",null,null,null,null,this.Div01_01_03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_DireDown");
            obj.set_accessibilityenable("false");
            this.Div01_01_03.addChild(obj.name, obj);

            obj = new Static("Static02","24","24",null,"144","48",null,null,null,null,null,this.Div01_01_03.form);
            obj.set_taborder("2");
            obj.set_text("툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다.");
            obj.set_cssclass("sta_POP_Infor15R");
            this.Div01_01_03.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","26","26","24",null,null,null,null,null,this.Div01_01_03.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_01_03.addChild(obj.name, obj);

            obj = new Div("Div01_01_00_02","0","Div01_01_03:30","360","197",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","360",null,null,"11",null,null,null,null,this.Div01_01_00_02.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_01_00_02.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,null,"22","12","24","0",null,null,null,null,this.Div01_01_00_02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_DireDown");
            obj.set_accessibilityenable("false");
            this.Div01_01_00_02.addChild(obj.name, obj);

            obj = new Static("Static02","24","24",null,"144","48",null,null,null,null,null,this.Div01_01_00_02.form);
            obj.set_taborder("2");
            obj.set_text("툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다.");
            obj.set_cssclass("sta_POP_Infor15R");
            this.Div01_01_00_02.addChild(obj.name, obj);

            obj = new Button("Button00",null,"24","26","26","24",null,null,null,null,null,this.Div01_01_00_02.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_01_00_02.addChild(obj.name, obj);

            obj = new Div("Div01_02_01","0","Div01_01_00_02:80","360","197",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","11","360",null,null,"0",null,null,null,null,this.Div01_02_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_02_01.addChild(obj.name, obj);

            obj = new Static("Static00_00","24","0","22","12",null,null,null,null,null,null,this.Div01_02_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_DireUp");
            obj.set_accessibilityenable("false");
            this.Div01_02_01.addChild(obj.name, obj);

            obj = new Static("Static02","24","35",null,"144","48",null,null,null,null,null,this.Div01_02_01.form);
            obj.set_taborder("2");
            obj.set_text("툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다.");
            obj.set_cssclass("sta_POP_Infor15R");
            this.Div01_02_01.addChild(obj.name, obj);

            obj = new Button("Button00",null,"35","26","26","24",null,null,null,null,null,this.Div01_02_01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_02_01.addChild(obj.name, obj);

            obj = new Div("Div01_01_01_01","0","Div01_02_01:30","360","197",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","11","360",null,null,"0",null,null,null,null,this.Div01_01_01_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_01_01_01.addChild(obj.name, obj);

            obj = new Static("Static00_00","169","0","22","12",null,null,null,null,null,null,this.Div01_01_01_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_DireUp");
            obj.set_accessibilityenable("false");
            this.Div01_01_01_01.addChild(obj.name, obj);

            obj = new Static("Static02","24","35",null,"144","48",null,null,null,null,null,this.Div01_01_01_01.form);
            obj.set_taborder("2");
            obj.set_text("툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다.");
            obj.set_cssclass("sta_POP_Infor15R");
            this.Div01_01_01_01.addChild(obj.name, obj);

            obj = new Button("Button00",null,"35","26","26","24",null,null,null,null,null,this.Div01_01_01_01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_01_01_01.addChild(obj.name, obj);

            obj = new Div("Div01_01_00_00_01","0","Div01_01_01_01:30","360","197",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Div01");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","11","360",null,null,"0",null,null,null,null,this.Div01_01_00_00_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            this.Div01_01_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,"0","22","12","24",null,null,null,null,null,this.Div01_01_00_00_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_DireUp");
            obj.set_accessibilityenable("false");
            this.Div01_01_00_00_01.addChild(obj.name, obj);

            obj = new Static("Static02","24","35",null,"144","48",null,null,null,null,null,this.Div01_01_00_00_01.form);
            obj.set_taborder("2");
            obj.set_text("툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다.본문을 가리지 않도록 주의합니다.");
            obj.set_cssclass("sta_POP_Infor15R");
            this.Div01_01_00_00_01.addChild(obj.name, obj);

            obj = new Button("Button00",null,"35","26","26","24",null,null,null,null,null,this.Div01_01_00_00_01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Helpclose");
            obj.set_accessibilitylabel("닫기");
            this.Div01_01_00_00_01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div02_00_02.form
            obj = new Layout("default","",0,0,this.Div02_00_02.form,function(p){});
            this.Div02_00_02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02_00.form
            obj = new Layout("default","",0,0,this.Div02_00.form,function(p){});
            this.Div02_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02_00_00.form
            obj = new Layout("default","",0,0,this.Div02_00_00.form,function(p){});
            this.Div02_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02_01.form
            obj = new Layout("default","",0,0,this.Div02_01.form,function(p){});
            this.Div02_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02_00_01.form
            obj = new Layout("default","",0,0,this.Div02_00_01.form,function(p){});
            this.Div02_00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02_00_00_00.form
            obj = new Layout("default","",0,0,this.Div02_00_00_00.form,function(p){});
            this.Div02_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02_01_00_00.form
            obj = new Layout("default","",0,0,this.Div02_01_00_00.form,function(p){});
            this.Div02_01_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02_01_00.form
            obj = new Layout("default","",0,0,this.Div02_01_00.form,function(p){});
            this.Div02_01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_01_03_00.form
            obj = new Layout("default","",0,0,this.Div01_01_03_00.form,function(p){});
            this.Div01_01_03_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_01_03_00_00.form
            obj = new Layout("default","",0,0,this.Div01_01_03_00_00.form,function(p){});
            this.Div01_01_03_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_01_03.form
            obj = new Layout("default","",0,0,this.Div01_01_03.form,function(p){});
            this.Div01_01_03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_01_00_02.form
            obj = new Layout("default","",0,0,this.Div01_01_00_02.form,function(p){});
            this.Div01_01_00_02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_02_01.form
            obj = new Layout("default","",0,0,this.Div01_02_01.form,function(p){});
            this.Div01_02_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_01_01_01.form
            obj = new Layout("default","",0,0,this.Div01_01_01_01.form,function(p){});
            this.Div01_01_01_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01_01_00_00_01.form
            obj = new Layout("default","",0,0,this.Div01_01_00_00_01.form,function(p){});
            this.Div01_01_00_00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,2950,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp07_Hel05.xfdl", function() {

        this.hel05_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.hel05_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("comp07_Hel05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
