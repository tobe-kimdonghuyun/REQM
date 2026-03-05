(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("src06");
            this.set_titletext("탐색_페이지네이션");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","210","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("페이지네이션");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","129","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Pagination");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","0","85",null,"74","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("페이지네이션은 많은 양의 콘텐츠를 탐색하기 쉽도록 여러 화면에 나누고, 분할된 화면을 탐색하는 데 사용되는 요소이다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Div("Div06","0","Static00_01:80","660","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div06");
            obj.set_visible("true");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","62","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("0");
            obj.set_text("이전");
            obj.set_cssclass("btn_WF_PgPrev");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01","70","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("1");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_PgNumS");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_00","118","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("2");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_01","166","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("3");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_02","214","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("4");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_03","262","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_04","310","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("6");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_05","358","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("7");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_06","406","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_07","454","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Static("Static00","502","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Ellipsis");
            obj.set_visible("true");
            obj.set_accessibilitylabel("줄임");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button01_07_01","550","0","40","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("11");
            obj.set_text("99");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Button("Button00_00","598","0","62","40",null,null,null,null,null,null,this.Div06.form);
            obj.set_taborder("12");
            obj.set_text("다음");
            obj.set_cssclass("btn_WF_PgNext");
            obj.set_visible("true");
            this.Div06.addChild(obj.name, obj);

            obj = new Edit("Edit00","246","Div06:43","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_displaynulltext("1");
            obj.set_visible("true");
            obj.set_accessibilitylabel("페이지");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","302","Div06:46","40","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("/22");
            obj.set_cssclass("sta_WF_Pg15R");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00_00_00_00","Static00:16","Div06:43","64","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("이동");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_visible("true");
            obj.set_accessibilitylabel("페이지");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","420","328","168",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_verticalgap("24");
            obj.set_flexcrossaxisalign("center");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem03\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel01\"/><PanelItem id=\"PanelItem00\" componentid=\"Panel03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","30","410","132","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_horizontalgap("8");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","30","410","62","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("이전");
            obj.set_cssclass("btn_WF_PgPrev");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","100","410","62","40",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("다음");
            obj.set_cssclass("btn_WF_PgNext");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","100","410","328","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_horizontalgap("8");
            obj.set_visible("false");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button01_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Button01_02\"/><PanelItem id=\"PanelItem04\" componentid=\"Button01_03\"/><PanelItem id=\"PanelItem05\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem06\" componentid=\"Button01_07_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","162","410","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_PgNumS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","338","410","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01","338","410","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_02","386","410","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_03","434","410","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","482","410","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Ellipsis");
            obj.set_visible("false");
            obj.set_accessibilitylabel("줄임");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_07_01","530","410","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("99");
            obj.set_cssclass("btn_WF_PgNum");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","76","144","176","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_visible("false");
            obj.set_horizontalgap("16");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel04\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","136","83","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_displaynulltext("1");
            obj.set_visible("false");
            obj.set_accessibilitylabel("페이지");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","144","110","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("/22");
            obj.set_cssclass("sta_WF_Pg15R");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_03","132","138","64","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("이동");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_visible("false");
            obj.set_accessibilitylabel("페이지");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel04","0","0","96","40",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Edit00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div06.form
            obj = new Layout("default","",0,0,this.Div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_taborder("0");
                p.Button00.set_text("이전");
                p.Button00.set_cssclass("btn_WF_PgPrev");
                p.Button00.set_visible("true");
                p.Button00.move("0","0","62","40",null,null);

                p.Button01.set_taborder("1");
                p.Button01.set_text("1");
                p.Button01.set_cssclass("btn_WF_PgNumS");
                p.Button01.set_visible("true");
                p.Button01.move("70","0","40","40",null,null);

                p.Button01_00.set_taborder("2");
                p.Button01_00.set_text("2");
                p.Button01_00.set_cssclass("btn_WF_PgNum");
                p.Button01_00.set_visible("true");
                p.Button01_00.move("118","0","40","40",null,null);

                p.Button01_01.set_taborder("3");
                p.Button01_01.set_text("3");
                p.Button01_01.set_cssclass("btn_WF_PgNum");
                p.Button01_01.set_visible("true");
                p.Button01_01.move("166","0","40","40",null,null);

                p.Button01_02.set_taborder("4");
                p.Button01_02.set_text("4");
                p.Button01_02.set_cssclass("btn_WF_PgNum");
                p.Button01_02.set_visible("true");
                p.Button01_02.move("214","0","40","40",null,null);

                p.Button01_03.set_taborder("5");
                p.Button01_03.set_text("5");
                p.Button01_03.set_cssclass("btn_WF_PgNum");
                p.Button01_03.set_visible("true");
                p.Button01_03.move("262","0","40","40",null,null);

                p.Button01_04.set_taborder("6");
                p.Button01_04.set_text("6");
                p.Button01_04.set_cssclass("btn_WF_PgNum");
                p.Button01_04.set_visible("true");
                p.Button01_04.move("310","0","40","40",null,null);

                p.Button01_05.set_taborder("7");
                p.Button01_05.set_text("7");
                p.Button01_05.set_cssclass("btn_WF_PgNum");
                p.Button01_05.set_visible("true");
                p.Button01_05.move("358","0","40","40",null,null);

                p.Button01_06.set_taborder("8");
                p.Button01_06.set_text("8");
                p.Button01_06.set_cssclass("btn_WF_PgNum");
                p.Button01_06.set_visible("true");
                p.Button01_06.move("406","0","40","40",null,null);

                p.Button01_07.set_taborder("9");
                p.Button01_07.set_text("9");
                p.Button01_07.set_cssclass("btn_WF_PgNum");
                p.Button01_07.set_visible("true");
                p.Button01_07.move("454","0","40","40",null,null);

                p.Static00.set_taborder("10");
                p.Static00.set_cssclass("sta_WF_Ellipsis");
                p.Static00.set_visible("true");
                p.Static00.set_accessibilitylabel("줄임");
                p.Static00.move("502","0","40","40",null,null);

                p.Button01_07_01.set_taborder("11");
                p.Button01_07_01.set_text("99");
                p.Button01_07_01.set_cssclass("btn_WF_PgNum");
                p.Button01_07_01.set_visible("true");
                p.Button01_07_01.move("550","0","40","40",null,null);

                p.Button00_00.set_taborder("12");
                p.Button00_00.set_text("다음");
                p.Button00_00.set_cssclass("btn_WF_PgNext");
                p.Button00_00.set_visible("true");
                p.Button00_00.move("598","0","62","40",null,null);
            	}
            );
            this.Div06.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div06.form
            obj = new Layout("Layout0","",0,0,this.Div06.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_visible("false");

                p.Button01.set_visible("false");

                p.Button01_00.set_visible("false");

                p.Button01_01.set_visible("false");

                p.Button01_02.set_visible("false");

                p.Button01_03.set_visible("false");

                p.Button01_04.set_visible("false");

                p.Button01_05.set_visible("false");

                p.Button01_06.set_visible("false");

                p.Button01_07.set_visible("false");

                p.Static00.set_visible("false");

                p.Button01_07_01.set_visible("false");

                p.Button00_00.set_visible("false");
            	}
            );
            this.Div06.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("탐색_페이지네이션");

                p.staH2.set_taborder("0");
                p.staH2.set_text("페이지네이션");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("width");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","210","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Pagination");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","0","129","60",null,null);

                p.Static00_01.set_taborder("3");
                p.Static00_01.set_text("페이지네이션은 많은 양의 콘텐츠를 탐색하기 쉽도록 여러 화면에 나누고, 분할된 화면을 탐색하는 데 사용되는 요소이다.");
                p.Static00_01.set_cssclass("sta_WF_Descript");
                p.Static00_01.set_fittocontents("height");
                p.Static00_01.move("0","85",null,"74","0",null);

                p.Div06.set_taborder("4");
                p.Div06.set_text("Div06");
                p.Div06.set_visible("true");
                p.Div06.set_accessibilityenable("false");
                p.Div06.move("0","Static00_01:80","660","40",null,null);

                p.Edit00.set_taborder("5");
                p.Edit00.set_displaynulltext("1");
                p.Edit00.set_visible("true");
                p.Edit00.set_accessibilitylabel("페이지");
                p.Edit00.move("246","Div06:43","56","40",null,null);

                p.Static00.set_taborder("6");
                p.Static00.set_text("/22");
                p.Static00.set_cssclass("sta_WF_Pg15R");
                p.Static00.set_visible("true");
                p.Static00.move("302","Div06:46","40","34",null,null);

                p.Button00_00_00_00_00_00.set_taborder("7");
                p.Button00_00_00_00_00_00.set_text("이동");
                p.Button00_00_00_00_00_00.set_cssclass("btn_WF_Custom");
                p.Button00_00_00_00_00_00.set_visible("true");
                p.Button00_00_00_00_00_00.set_accessibilitylabel("페이지");
                p.Button00_00_00_00_00_00.move("Static00:16","Div06:43","64","40",null,null);

                p.Panel02.set_taborder("8");
                p.Panel02.set_type("vertical");
                p.Panel02.set_verticalgap("24");
                p.Panel02.set_flexcrossaxisalign("center");
                p.Panel02.set_visible("false");
                p.Panel02.move("0","420","328","168",null,null);

                p.Panel00.set_taborder("9");
                p.Panel00.set_horizontalgap("8");
                p.Panel00.set_visible("false");
                p.Panel00.move("30","410","132","40",null,null);

                p.Button00.set_taborder("10");
                p.Button00.set_text("이전");
                p.Button00.set_cssclass("btn_WF_PgPrev");
                p.Button00.set_enable("false");
                p.Button00.set_visible("false");
                p.Button00.move("30","410","62","40",null,null);

                p.Button00_00.set_taborder("11");
                p.Button00_00.set_text("다음");
                p.Button00_00.set_cssclass("btn_WF_PgNext");
                p.Button00_00.set_visible("false");
                p.Button00_00.move("100","410","62","40",null,null);

                p.Panel01.set_taborder("12");
                p.Panel01.set_horizontalgap("8");
                p.Panel01.set_visible("false");
                p.Panel01.move("100","410","328","40",null,null);

                p.Button01.set_taborder("13");
                p.Button01.set_text("1");
                p.Button01.set_cssclass("btn_WF_PgNumS");
                p.Button01.set_visible("false");
                p.Button01.move("162","410","40","40",null,null);

                p.Button01_00.set_taborder("14");
                p.Button01_00.set_text("2");
                p.Button01_00.set_cssclass("btn_WF_PgNum");
                p.Button01_00.set_visible("false");
                p.Button01_00.move("338","410","40","40",null,null);

                p.Button01_01.set_taborder("15");
                p.Button01_01.set_text("3");
                p.Button01_01.set_cssclass("btn_WF_PgNum");
                p.Button01_01.set_visible("false");
                p.Button01_01.move("338","410","40","40",null,null);

                p.Button01_02.set_taborder("16");
                p.Button01_02.set_text("4");
                p.Button01_02.set_cssclass("btn_WF_PgNum");
                p.Button01_02.set_visible("false");
                p.Button01_02.move("386","410","40","40",null,null);

                p.Button01_03.set_taborder("17");
                p.Button01_03.set_text("5");
                p.Button01_03.set_cssclass("btn_WF_PgNum");
                p.Button01_03.set_visible("false");
                p.Button01_03.move("434","410","40","40",null,null);

                p.Static00_00.set_taborder("18");
                p.Static00_00.set_cssclass("sta_WF_Ellipsis");
                p.Static00_00.set_visible("false");
                p.Static00_00.set_accessibilitylabel("줄임");
                p.Static00_00.move("482","410","40","40",null,null);

                p.Button01_07_01.set_taborder("19");
                p.Button01_07_01.set_text("99");
                p.Button01_07_01.set_cssclass("btn_WF_PgNum");
                p.Button01_07_01.set_visible("false");
                p.Button01_07_01.move("530","410","40","40",null,null);

                p.Panel03.set_taborder("20");
                p.Panel03.set_visible("false");
                p.Panel03.set_horizontalgap("16");
                p.Panel03.move("76","144","176","40",null,null);

                p.Edit00_00.set_taborder("21");
                p.Edit00_00.set_displaynulltext("1");
                p.Edit00_00.set_visible("false");
                p.Edit00_00.set_accessibilitylabel("페이지");
                p.Edit00_00.move("136","83","56","40",null,null);

                p.Static00_00_00.set_taborder("22");
                p.Static00_00_00.set_text("/22");
                p.Static00_00_00.set_cssclass("sta_WF_Pg15R");
                p.Static00_00_00.set_visible("false");
                p.Static00_00_00.move("144","110","40","40",null,null);

                p.Button00_03.set_taborder("23");
                p.Button00_03.set_text("이동");
                p.Button00_03.set_cssclass("btn_WF_Custom");
                p.Button00_03.set_visible("false");
                p.Button00_03.set_accessibilitylabel("페이지");
                p.Button00_03.move("132","138","64","40",null,null);

                p.Panel04.set_taborder("24");
                p.Panel04.move("0","0","96","40",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Div06.set_visible("false");
                p.Div06.move("14","598","660","40",null,null);

                p.Edit00.set_visible("false");
                p.Edit00.move("260","681","56","40",null,null);

                p.Static00.set_visible("false");
                p.Static00.move("316","684","40","34",null,null);

                p.Button00_00_00_00_00_00.set_visible("false");
                p.Button00_00_00_00_00_00.move("372","681","64","40",null,null);

                p.Panel02.set_visible("true");
                p.Panel02.set_type("vertical");
                p.Panel02.move("0","Static00_01:80",null,"265","0",null);

                p.Panel00.set_visible("true");

                p.Button00.set_visible("true");

                p.Button00_00.set_visible("true");

                p.Panel01.set_visible("true");

                p.Button01.set_visible("true");

                p.Button01_00.set_visible("true");

                p.Button01_01.set_visible("true");

                p.Button01_02.set_visible("true");

                p.Button01_03.set_visible("true");

                p.Static00_00.set_visible("true");

                p.Button01_07_01.set_visible("true");

                p.Edit00_00.set_visible("true");
                p.Edit00_00.move("136","83","56","40",null,null);

                p.Static00_00_00.set_visible("true");
                p.Static00_00_00.move("144","110","40","40",null,null);

                p.Button00_03.set_visible("true");
                p.Button00_03.move("132","138","64","40",null,null);

                p.Panel03.set_visible("true");
            	}
            );
            obj.set_mobileorientation("Landscape");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("comp02_src06.xfdl", function() {

        this.src06_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.src06_onload,this);
        };
        this.loadIncludeScript("comp02_src06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
