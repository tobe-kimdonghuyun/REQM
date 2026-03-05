(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("lay10");
            this.set_titletext("레이아웃 및 표현_탭");
            this.set_cssclass("btn_WF_Txt");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1260);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staH2","0","0","40","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("탭");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("staDivider","staH2:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staEtit","staDivider:15","0","60","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Tab");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","0","85",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("탭은 버튼을 눌러 상호배타적인 여러 개의 콘텐츠 섹션을 전환할 수 있는 컴포넌트이다. 콘텐츠 섹션은 동일한 영역 내에서 전환되기 때문에 정보를 탐색하는 맥락을 유지할 수 있고 작은 공간에 많은 양의 콘텐츠를 효과적으로 표현할 수 있다.");
            obj.set_cssclass("sta_WF_Descript");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Static("staH4","0","Static00_01_00:59","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("pc");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_visible("true");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","staH4:25","171","56",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabLS");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","Button00:0","staH4:25","171","56",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabL");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02","Button00_01:0","staH4:25","171","56",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabL");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02_00","513","staH4:25","171","56",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabL");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","Button00_02_00:0","staH4:25","171","56",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabL");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Button00:56","309","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_accessibilityrole("tab");
            obj.set_accessibilitylabel("PC");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_03","57","0","65","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabLsmallS");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","8","0","53","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabLsmall");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_02_00_00","252","0","53","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabLsmall");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_02_01","8","0","53","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabLsmall");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00_01_00","130","0","53","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabLsmall");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button03","0","548","171","56",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabFirS");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00","Button03:0","548","171","56",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_Tab");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_00","Button03_00:0","548","171","56",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabS");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_00_01","Button03_00_00:0","548","171","56",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_Tab");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_03","684","548","171","56",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabLast");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01_00","0","Button03:40","63","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabMS");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_04_00","Button03_01_00:8","Button03:40","63","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabM");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_00_00_00","Button03_00_04_00:8","Button03:40","63","40",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabM");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_01_00_00","Button03_00_00_00_00:8","Button03:40","63","40",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabM");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_02_00_00","Button03_00_01_00_00:8","Button03:40","63","40",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabM");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_00_03_00_00","Button03_00_02_00_00:8","Button03:40","63","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabM");
            obj.set_visible("true");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","0","875","220","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("mobile");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_visible("false");
            obj.set_accessibilityrole("heading3");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_01","0","Static00_03:57","70","48",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabMlineS");
            obj.set_visible("false");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_02","Button03_01:8","Static00_03:57","70","48",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabMline");
            obj.set_visible("false");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_03","156","Static00_03:57","70","48",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabMline");
            obj.set_visible("false");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_04","Button03_03:8","Static00_03:57","70","48",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabMline");
            obj.set_visible("false");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_05","Button03_04:8","Static00_03:57","70","48",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabMline");
            obj.set_visible("false");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button03_06","Button03_05:8","Static00_03:57","70","48",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabMline");
            obj.set_visible("false");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","0","Button03_01:46","63","48",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabMS");
            obj.set_visible("false");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_01","Button04:8","Button03_01:46","63","48",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabM");
            obj.set_visible("false");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_02","Button04_01:8","Button03_01:46","63","48",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabM");
            obj.set_visible("false");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_03","Button04_02:8","Button03_01:46","63","48",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabM");
            obj.set_visible("false");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_04","Button04_03:8","Button03_01:46","63","48",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabM");
            obj.set_visible("false");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);

            obj = new Button("Button04_05","Button04_04:8","Button03_01:46","63","48",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("label");
            obj.set_cssclass("btn_WF_TabM");
            obj.set_visible("false");
            obj.set_accessibilityrole("tab");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            obj.set_type("horizontal");
            obj.set_horizontalgap("8");
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1260,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("레이아웃 및 표현_탭");
                p.set_cssclass("btn_WF_Txt");

                p.staH2.set_taborder("0");
                p.staH2.set_text("탭");
                p.staH2.set_cssclass("sta_WF_H2_pc");
                p.staH2.set_fittocontents("width");
                p.staH2.set_accessibilityrole("heading2");
                p.staH2.move("0","0","40","60",null,null);

                p.staDivider.set_taborder("1");
                p.staDivider.set_cssclass("sta_WF_line");
                p.staDivider.set_accessibilityenable("false");
                p.staDivider.move("staH2:15","20","1","21",null,null);

                p.staEtit.set_taborder("2");
                p.staEtit.set_text("Tab");
                p.staEtit.set_cssclass("sta_WF_ParaH4_pc");
                p.staEtit.move("staDivider:15","0","60","60",null,null);

                p.Static00_01_00.set_taborder("3");
                p.Static00_01_00.set_text("탭은 버튼을 눌러 상호배타적인 여러 개의 콘텐츠 섹션을 전환할 수 있는 컴포넌트이다. 콘텐츠 섹션은 동일한 영역 내에서 전환되기 때문에 정보를 탐색하는 맥락을 유지할 수 있고 작은 공간에 많은 양의 콘텐츠를 효과적으로 표현할 수 있다.");
                p.Static00_01_00.set_cssclass("sta_WF_Descript");
                p.Static00_01_00.set_fittocontents("height");
                p.Static00_01_00.move("0","85",null,"100","0",null);

                p.staH4.set_taborder("4");
                p.staH4.set_text("pc");
                p.staH4.set_cssclass("sta_WF_H4_pc");
                p.staH4.set_visible("true");
                p.staH4.set_accessibilityrole("heading3");
                p.staH4.move("0","Static00_01_00:59","220","30",null,null);

                p.Button00.set_taborder("5");
                p.Button00.set_text("label");
                p.Button00.set_cssclass("btn_WF_TabLS");
                p.Button00.set_visible("true");
                p.Button00.set_accessibilityrole("tab");
                p.Button00.move("0","staH4:25","171","56",null,null);

                p.Button00_01.set_taborder("6");
                p.Button00_01.set_text("label");
                p.Button00_01.set_cssclass("btn_WF_TabL");
                p.Button00_01.set_visible("true");
                p.Button00_01.set_accessibilityrole("tab");
                p.Button00_01.move("Button00:0","staH4:25","171","56",null,null);

                p.Button00_02.set_taborder("7");
                p.Button00_02.set_text("label");
                p.Button00_02.set_cssclass("btn_WF_TabL");
                p.Button00_02.set_visible("true");
                p.Button00_02.set_accessibilityrole("tab");
                p.Button00_02.move("Button00_01:0","staH4:25","171","56",null,null);

                p.Button00_02_00.set_taborder("8");
                p.Button00_02_00.set_text("label");
                p.Button00_02_00.set_cssclass("btn_WF_TabL");
                p.Button00_02_00.set_visible("true");
                p.Button00_02_00.set_accessibilityrole("tab");
                p.Button00_02_00.move("513","staH4:25","171","56",null,null);

                p.Button00_00.set_taborder("9");
                p.Button00_00.set_text("label");
                p.Button00_00.set_cssclass("btn_WF_TabL");
                p.Button00_00.set_visible("true");
                p.Button00_00.set_accessibilityrole("tab");
                p.Button00_00.move("Button00_02_00:0","staH4:25","171","56",null,null);

                p.Div00.set_taborder("10");
                p.Div00.set_text("Div00");
                p.Div00.set_accessibilityrole("tab");
                p.Div00.set_accessibilitylabel("PC");
                p.Div00.move("0","Button00:56","309","40",null,null);

                p.Button03.set_taborder("11");
                p.Button03.set_text("label");
                p.Button03.set_cssclass("btn_WF_TabFirS");
                p.Button03.set_accessibilityrole("tab");
                p.Button03.move("0","548","171","56",null,null);

                p.Button03_00.set_taborder("12");
                p.Button03_00.set_text("label");
                p.Button03_00.set_cssclass("btn_WF_Tab");
                p.Button03_00.set_visible("true");
                p.Button03_00.set_accessibilityrole("tab");
                p.Button03_00.move("Button03:0","548","171","56",null,null);

                p.Button03_00_00.set_taborder("13");
                p.Button03_00_00.set_text("label");
                p.Button03_00_00.set_cssclass("btn_WF_TabS");
                p.Button03_00_00.set_visible("true");
                p.Button03_00_00.set_accessibilityrole("tab");
                p.Button03_00_00.move("Button03_00:0","548","171","56",null,null);

                p.Button03_00_00_01.set_taborder("14");
                p.Button03_00_00_01.set_text("label");
                p.Button03_00_00_01.set_cssclass("btn_WF_Tab");
                p.Button03_00_00_01.set_visible("true");
                p.Button03_00_00_01.set_accessibilityrole("tab");
                p.Button03_00_00_01.move("Button03_00_00:0","548","171","56",null,null);

                p.Button03_00_03.set_taborder("15");
                p.Button03_00_03.set_text("label");
                p.Button03_00_03.set_cssclass("btn_WF_TabLast");
                p.Button03_00_03.set_visible("true");
                p.Button03_00_03.set_accessibilityrole("tab");
                p.Button03_00_03.move("684","548","171","56",null,null);

                p.Button03_01_00.set_taborder("16");
                p.Button03_01_00.set_text("label");
                p.Button03_01_00.set_cssclass("btn_WF_TabMS");
                p.Button03_01_00.set_visible("true");
                p.Button03_01_00.set_accessibilityrole("tab");
                p.Button03_01_00.move("0","Button03:40","63","40",null,null);

                p.Button03_00_04_00.set_taborder("17");
                p.Button03_00_04_00.set_text("label");
                p.Button03_00_04_00.set_cssclass("btn_WF_TabM");
                p.Button03_00_04_00.set_visible("true");
                p.Button03_00_04_00.set_accessibilityrole("tab");
                p.Button03_00_04_00.move("Button03_01_00:8","Button03:40","63","40",null,null);

                p.Button03_00_00_00_00.set_taborder("18");
                p.Button03_00_00_00_00.set_text("label");
                p.Button03_00_00_00_00.set_cssclass("btn_WF_TabM");
                p.Button03_00_00_00_00.set_visible("true");
                p.Button03_00_00_00_00.set_accessibilityrole("tab");
                p.Button03_00_00_00_00.move("Button03_00_04_00:8","Button03:40","63","40",null,null);

                p.Button03_00_01_00_00.set_taborder("19");
                p.Button03_00_01_00_00.set_text("label");
                p.Button03_00_01_00_00.set_cssclass("btn_WF_TabM");
                p.Button03_00_01_00_00.set_visible("true");
                p.Button03_00_01_00_00.set_accessibilityrole("tab");
                p.Button03_00_01_00_00.move("Button03_00_00_00_00:8","Button03:40","63","40",null,null);

                p.Button03_00_02_00_00.set_taborder("20");
                p.Button03_00_02_00_00.set_text("label");
                p.Button03_00_02_00_00.set_cssclass("btn_WF_TabM");
                p.Button03_00_02_00_00.set_visible("true");
                p.Button03_00_02_00_00.set_accessibilityrole("tab");
                p.Button03_00_02_00_00.move("Button03_00_01_00_00:8","Button03:40","63","40",null,null);

                p.Button03_00_03_00_00.set_taborder("21");
                p.Button03_00_03_00_00.set_text("label");
                p.Button03_00_03_00_00.set_cssclass("btn_WF_TabM");
                p.Button03_00_03_00_00.set_visible("true");
                p.Button03_00_03_00_00.set_accessibilityrole("tab");
                p.Button03_00_03_00_00.move("Button03_00_02_00_00:8","Button03:40","63","40",null,null);

                p.Static00_03.set_taborder("22");
                p.Static00_03.set_text("mobile");
                p.Static00_03.set_cssclass("sta_WF_H4_pc");
                p.Static00_03.set_visible("false");
                p.Static00_03.set_accessibilityrole("heading3");
                p.Static00_03.move("0","875","220","30",null,null);

                p.Button03_01.set_taborder("23");
                p.Button03_01.set_text("label");
                p.Button03_01.set_cssclass("btn_WF_TabMlineS");
                p.Button03_01.set_visible("false");
                p.Button03_01.set_accessibilityrole("tab");
                p.Button03_01.move("0","Static00_03:57","70","48",null,null);

                p.Button03_02.set_taborder("24");
                p.Button03_02.set_text("label");
                p.Button03_02.set_cssclass("btn_WF_TabMline");
                p.Button03_02.set_visible("false");
                p.Button03_02.set_accessibilityrole("tab");
                p.Button03_02.move("Button03_01:8","Static00_03:57","70","48",null,null);

                p.Button03_03.set_taborder("25");
                p.Button03_03.set_text("label");
                p.Button03_03.set_cssclass("btn_WF_TabMline");
                p.Button03_03.set_visible("false");
                p.Button03_03.set_accessibilityrole("tab");
                p.Button03_03.move("156","Static00_03:57","70","48",null,null);

                p.Button03_04.set_taborder("26");
                p.Button03_04.set_text("label");
                p.Button03_04.set_cssclass("btn_WF_TabMline");
                p.Button03_04.set_visible("false");
                p.Button03_04.set_accessibilityrole("tab");
                p.Button03_04.move("Button03_03:8","Static00_03:57","70","48",null,null);

                p.Button03_05.set_taborder("27");
                p.Button03_05.set_text("label");
                p.Button03_05.set_cssclass("btn_WF_TabMline");
                p.Button03_05.set_visible("false");
                p.Button03_05.set_accessibilityrole("tab");
                p.Button03_05.move("Button03_04:8","Static00_03:57","70","48",null,null);

                p.Button03_06.set_taborder("28");
                p.Button03_06.set_text("label");
                p.Button03_06.set_cssclass("btn_WF_TabMline");
                p.Button03_06.set_visible("false");
                p.Button03_06.set_accessibilityrole("tab");
                p.Button03_06.move("Button03_05:8","Static00_03:57","70","48",null,null);

                p.Button04.set_taborder("29");
                p.Button04.set_text("label");
                p.Button04.set_cssclass("btn_WF_TabMS");
                p.Button04.set_visible("false");
                p.Button04.set_accessibilityrole("tab");
                p.Button04.move("0","Button03_01:46","63","48",null,null);

                p.Button04_01.set_taborder("30");
                p.Button04_01.set_text("label");
                p.Button04_01.set_cssclass("btn_WF_TabM");
                p.Button04_01.set_visible("false");
                p.Button04_01.set_accessibilityrole("tab");
                p.Button04_01.move("Button04:8","Button03_01:46","63","48",null,null);

                p.Button04_02.set_taborder("31");
                p.Button04_02.set_text("label");
                p.Button04_02.set_cssclass("btn_WF_TabM");
                p.Button04_02.set_visible("false");
                p.Button04_02.set_accessibilityrole("tab");
                p.Button04_02.move("Button04_01:8","Button03_01:46","63","48",null,null);

                p.Button04_03.set_taborder("32");
                p.Button04_03.set_text("label");
                p.Button04_03.set_cssclass("btn_WF_TabM");
                p.Button04_03.set_visible("false");
                p.Button04_03.set_accessibilityrole("tab");
                p.Button04_03.move("Button04_02:8","Button03_01:46","63","48",null,null);

                p.Button04_04.set_taborder("33");
                p.Button04_04.set_text("label");
                p.Button04_04.set_cssclass("btn_WF_TabM");
                p.Button04_04.set_visible("false");
                p.Button04_04.set_accessibilityrole("tab");
                p.Button04_04.move("Button04_03:8","Button03_01:46","63","48",null,null);

                p.Button04_05.set_taborder("34");
                p.Button04_05.set_text("label");
                p.Button04_05.set_cssclass("btn_WF_TabM");
                p.Button04_05.set_visible("false");
                p.Button04_05.set_accessibilityrole("tab");
                p.Button04_05.move("Button04_04:8","Button03_01:46","63","48",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,1260,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staH4.set_visible("false");
                p.staH4.move("565","322","220","30",null,null);

                p.Button00.set_visible("false");
                p.Button00.move("565","377","171","56",null,null);

                p.Button00_01.set_visible("false");
                p.Button00_01.move("736","377","171","56",null,null);

                p.Button00_02.set_visible("false");
                p.Button00_02.move("907","staH4:25","171","56",null,null);

                p.Button00_02_00.set_visible("false");
                p.Button00_02_00.move("1078","staH4:25","171","56",null,null);

                p.Button00_00.set_visible("false");
                p.Button00_00.move("1249","staH4:25","171","56",null,null);

                p.Button03.set_visible("false");
                p.Button03.move("565","626","171","56",null,null);

                p.Button03_00.set_visible("false");
                p.Button03_00.move("736","626","171","56",null,null);

                p.Button03_00_00.set_visible("false");
                p.Button03_00_00.move("907","626","171","56",null,null);

                p.Button03_00_00_01.set_visible("false");
                p.Button03_00_00_01.move("1078","626","171","56",null,null);

                p.Button03_00_03.set_visible("false");
                p.Button03_00_03.move("1249","626","171","56",null,null);

                p.Button03_01_00.set_visible("false");
                p.Button03_01_00.set_text("label");
                p.Button03_01_00.move("565","Button03:40","63","40",null,null);

                p.Button03_00_04_00.set_visible("false");
                p.Button03_00_04_00.move("636","Button03:40","63","40",null,null);

                p.Button03_00_00_00_00.set_visible("false");
                p.Button03_00_00_00_00.move("707","Button03:40","63","40",null,null);

                p.Button03_00_01_00_00.set_visible("false");
                p.Button03_00_01_00_00.move("778","Button03:40","63","40",null,null);

                p.Button03_00_02_00_00.set_visible("false");
                p.Button03_00_02_00_00.move("849","Button03:40","63","40",null,null);

                p.Button03_00_03_00_00.set_visible("false");
                p.Button03_00_03_00_00.move("920","Button03:40","63","40",null,null);

                p.Static00_03.set_visible("true");
                p.Static00_03.move("0","Static00_01_00:80","220","30",null,null);

                p.Button03_01.set_visible("true");

                p.Button03_02.set_visible("true");
                p.Button03_02.set_text("label");

                p.Button03_03.set_visible("true");

                p.Button03_04.set_visible("true");

                p.Button03_05.set_visible("true");

                p.Button03_06.set_visible("true");

                p.Button04.set_visible("true");

                p.Button04_01.set_visible("true");

                p.Button04_02.set_visible("true");

                p.Button04_03.set_visible("true");

                p.Button04_04.set_visible("true");

                p.Button04_05.set_visible("true");

                p.Static00_01_00.move("0","85",null,"178","0",null);

                p.Div00.set_visible("false");
                p.Div00.move("565","Button00:56","309","40",null,null);
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
        this.registerScript("comp03_lay10.xfdl", function() {

        this.lay10_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.lay10_onload,this);
            this.staEtit.addEventHandler("onclick",this.Div01_01_Static00_02_onclick,this);
        };
        this.loadIncludeScript("comp03_lay10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
