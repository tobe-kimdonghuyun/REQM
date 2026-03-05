(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleDynamicDiv");
            this.set_titletext("Div동적생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDiv", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "divId","type" : "STRING","size" : "256"}]},"Rows" : [{"divId" : "divStep1"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","140","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("동적생성");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","Static00:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","Static01:15","0","110","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Dynamic");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Button("btnDivDel",null,"100","165","48","133",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div동적생성 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnDivAdd",null,"100","125","48","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div동적생성");
            this.addChild(obj.name, obj);

            obj = new Div("divStep1","0","btnDivDel:24",null,"560","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("sample::sampleDynamicDivLink.xfdl");
            obj.set_text("");
            obj.set_fittocontents("height");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","0","divStep1:40",null,"868","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("div_WF_Detailbox");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","25","20","360","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"Combo00\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","108","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Lable15R");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("Combo00","0","31","100%","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel11","427","20","360","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle03\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit02\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03","404","5","108","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_Lable15R");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit02","404","36","100%","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel01","25","124","360","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle05\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit05\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05","13","122","108","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit05","16","152","100%","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel02","427","124","360","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle08\"/><PanelItem id=\"PanelItem01\" componentid=\"Calendar00\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle08","420","135","108","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","420","162","100%","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel03","25","226","360","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_type("vertical");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"Div00\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","440","222","108","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Lable15R");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("Div00","440","247","100%","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("Div00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","0","100%","48",null,null,null,null,null,null,this.divDetail.form.Div00.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.set_cssclass("edt_WF_Search");
            this.divDetail.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button02",null,"4","40","40","4",null,null,null,null,null,this.divDetail.form.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.divDetail.form.Div00.addChild(obj.name, obj);

            obj = new Panel("Panel04","427","226","360","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle04\"/><PanelItem id=\"PanelItem01\" componentid=\"Div01\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle04","36","301","108","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("Div01","99","304","100%","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("Div01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit01","0","0","100%","48",null,null,null,null,null,null,this.divDetail.form.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_Search");
            this.divDetail.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button00",null,"4","40","40","8",null,null,null,null,null,this.divDetail.form.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.divDetail.form.Div01.addChild(obj.name, obj);

            obj = new Panel("Panel05","25","327","360","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle06\"/><PanelItem id=\"PanelItem01\" componentid=\"Radio00\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle06","515","280","108","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Radio("Radio00","623","280","176","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divDetail_form_Radio00_innerdataset = new nexacro.NormalDataset("divDetail_form_Radio00_innerdataset", obj);
            divDetail_form_Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "0","datacolumn" : "체크"},{"codecolumn" : "1","datacolumn" : "체크"}]});
            obj.set_innerdataset(divDetail_form_Radio00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel07","428","328","360","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle09\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel06\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle09","9","352","108","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel06","121","357","100%","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_horizontalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Edit06\"/><PanelItem id=\"PanelItem01\" componentid=\"Button01\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit06","121","357","99","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_flexgrow("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("Button01","223","358","90","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Detail");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel08","25","432","360","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle02\"/><PanelItem id=\"PanelItem01\" componentid=\"Edit03\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02","452","337","108","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit03","636","342","100%","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_value("1234");
            obj.set_text("1234");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel09","431","428","360","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle07\"/><PanelItem id=\"PanelItem01\" componentid=\"CheckBox00\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle07","16","391","108","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","128","396","150","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            obj.set_text("사용");
            obj.set_value("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel10","25","544","360","79",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_type("vertical");
            obj.set_verticalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staTitle10\"/><PanelItem id=\"PanelItem01\" componentid=\"Spin00\"/></Contents>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle10","522","390","108","23",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("33");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Spin("Spin00","634","395","100%","48",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("34");
            this.divDetail.addChild(obj.name, obj);

            obj = new Panel("Panel12","457","593","360","1",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("35");
            obj.set_flexgrow("1");
            obj._setContents("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grd00","25","768","100%","170",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("36");
            obj.set_binddataset("dsDiv");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"divId\"/></Band><Band id=\"body\"><Cell text=\"bind:divId\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divStep1
            obj = new Layout("default","",0,0,this.divStep1.form,function(p){});
            this.divStep1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.Div00.form
            obj = new Layout("default","",0,0,this.divDetail.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit00.set_taborder("0");
                p.Edit00.set_enable("false");
                p.Edit00.set_cssclass("edt_WF_Search");
                p.Edit00.move("0","0","100%","48",null,null);

                p.Button02.set_taborder("1");
                p.Button02.set_cssclass("btn_WF_EdiSch");
                p.Button02.set_enable("false");
                p.Button02.move(null,"4","40","40","4",null);
            	}
            );
            this.divDetail.form.Div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divDetail.form.Div00.form
            obj = new Layout("Layout0","",0,0,this.divDetail.form.Div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divDetail.form.Div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divDetail.form.Div01.form
            obj = new Layout("default","",0,0,this.divDetail.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit01.set_taborder("0");
                p.Edit01.set_cssclass("edt_WF_Search");
                p.Edit01.move("0","0","100%","48",null,null);

                p.Button00.set_taborder("1");
                p.Button00.set_cssclass("btn_WF_EdtSch");
                p.Button00.move(null,"4","40","40","8",null);
            	}
            );
            this.divDetail.form.Div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divDetail.form.Div01.form
            obj = new Layout("Layout0","",0,0,this.divDetail.form.Div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divDetail.form.Div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_taborder("0");
                p.Panel00.set_type("vertical");
                p.Panel00.set_verticalgap("8");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("25","20","360","79",null,null);

                p.staTitle00.set_taborder("1");
                p.staTitle00.set_text("콤보박스");
                p.staTitle00.set_cssclass("sta_WF_Lable15R");
                p.staTitle00.move("0","0","108","23",null,null);

                p.Combo00.set_taborder("2");
                p.Combo00.set_text("Combo00");
                p.Combo00.move("0","31","100%","48",null,null);

                p.Panel11.set_taborder("3");
                p.Panel11.set_type("vertical");
                p.Panel11.set_verticalgap("8");
                p.Panel11.set_flexgrow("1");
                p.Panel11.move("427","20","360","79",null,null);

                p.staTitle03.set_taborder("4");
                p.staTitle03.set_text("필수에디트");
                p.staTitle03.set_cssclass("sta_WF_Lable15R");
                p.staTitle03.move("404","5","108","23",null,null);

                p.Edit02.set_taborder("5");
                p.Edit02.set_cssclass("essential");
                p.Edit02.move("404","36","100%","48",null,null);

                p.Panel01.set_taborder("6");
                p.Panel01.set_type("vertical");
                p.Panel01.set_verticalgap("8");
                p.Panel01.set_flexgrow("1");
                p.Panel01.move("25","124","360","79",null,null);

                p.staTitle05.set_taborder("7");
                p.staTitle05.set_text("에디트");
                p.staTitle05.set_cssclass("sta_WF_Label");
                p.staTitle05.move("13","122","108","23",null,null);

                p.Edit05.set_taborder("8");
                p.Edit05.move("16","152","100%","48",null,null);

                p.Panel02.set_taborder("9");
                p.Panel02.set_type("vertical");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_verticalgap("8");
                p.Panel02.set_flexgrow("1");
                p.Panel02.move("427","124","360","79",null,null);

                p.staTitle08.set_taborder("10");
                p.staTitle08.set_text("캘린더");
                p.staTitle08.set_cssclass("sta_WF_Label");
                p.staTitle08.move("420","135","108","23",null,null);

                p.Calendar00.set_taborder("11");
                p.Calendar00.move("420","162","100%","48",null,null);

                p.Panel03.set_taborder("12");
                p.Panel03.set_type("vertical");
                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_verticalgap("8");
                p.Panel03.set_flexgrow("1");
                p.Panel03.move("25","226","360","79",null,null);

                p.staTitle01.set_taborder("13");
                p.staTitle01.set_text("디세이블검색");
                p.staTitle01.set_cssclass("sta_WF_Lable15R");
                p.staTitle01.move("440","222","108","23",null,null);

                p.Div00.set_taborder("14");
                p.Div00.set_text("Div00");
                p.Div00.move("440","247","100%","48",null,null);

                p.Panel04.set_taborder("15");
                p.Panel04.set_type("vertical");
                p.Panel04.set_verticalgap("8");
                p.Panel04.set_flexgrow("1");
                p.Panel04.move("427","226","360","79",null,null);

                p.staTitle04.set_taborder("16");
                p.staTitle04.set_text("검색");
                p.staTitle04.set_cssclass("sta_WF_Label");
                p.staTitle04.move("36","301","108","23",null,null);

                p.Div01.set_taborder("17");
                p.Div01.set_text("Div01");
                p.Div01.move("99","304","100%","48",null,null);

                p.Panel05.set_taborder("18");
                p.Panel05.set_type("vertical");
                p.Panel05.set_verticalgap("8");
                p.Panel05.set_flexgrow("1");
                p.Panel05.move("25","327","360","79",null,null);

                p.staTitle06.set_taborder("19");
                p.staTitle06.set_text("라디오버튼");
                p.staTitle06.set_cssclass("sta_WF_Label");
                p.staTitle06.move("515","280","108","23",null,null);

                p.Radio00.set_taborder("20");
                p.Radio00.set_innerdataset(divDetail_form_Radio00_innerdataset);
                p.Radio00.set_codecolumn("codecolumn");
                p.Radio00.set_datacolumn("datacolumn");
                p.Radio00.set_direction("horizontal");
                p.Radio00.set_columncount("-1");
                p.Radio00.set_rowcount("-1");
                p.Radio00.set_value("0");
                p.Radio00.set_index("0");
                p.Radio00.move("623","280","176","28",null,null);

                p.Panel07.set_taborder("21");
                p.Panel07.set_verticalgap("8");
                p.Panel07.set_flexgrow("1");
                p.Panel07.set_type("vertical");
                p.Panel07.move("428","328","360","79",null,null);

                p.staTitle09.set_taborder("22");
                p.staTitle09.set_text("마스크에디트");
                p.staTitle09.set_cssclass("sta_WF_Label");
                p.staTitle09.move("9","352","108","23",null,null);

                p.Panel06.set_taborder("23");
                p.Panel06.set_horizontalgap("8");
                p.Panel06.move("121","357","100%","48",null,null);

                p.Edit06.set_taborder("24");
                p.Edit06.set_flexgrow("1");
                p.Edit06.move("121","357","99","48",null,null);

                p.Button01.set_taborder("25");
                p.Button01.set_text("버튼");
                p.Button01.set_cssclass("btn_WF_Detail");
                p.Button01.move("223","358","90","48",null,null);

                p.Panel08.set_taborder("26");
                p.Panel08.set_type("vertical");
                p.Panel08.set_verticalgap("8");
                p.Panel08.set_flexgrow("1");
                p.Panel08.move("25","432","360","79",null,null);

                p.staTitle02.set_taborder("27");
                p.staTitle02.set_text("핸드폰번호");
                p.staTitle02.set_cssclass("sta_WF_Label");
                p.staTitle02.move("452","337","108","23",null,null);

                p.Edit03.set_taborder("28");
                p.Edit03.set_value("1234");
                p.Edit03.move("636","342","100%","48",null,null);

                p.Panel09.set_taborder("29");
                p.Panel09.set_type("vertical");
                p.Panel09.set_verticalgap("8");
                p.Panel09.set_flexgrow("1");
                p.Panel09.move("431","428","360","79",null,null);

                p.staTitle07.set_taborder("30");
                p.staTitle07.set_text("체크박스");
                p.staTitle07.set_cssclass("sta_WF_Label");
                p.staTitle07.move("16","391","108","23",null,null);

                p.CheckBox00.set_taborder("31");
                p.CheckBox00.set_text("사용");
                p.CheckBox00.set_value("true");
                p.CheckBox00.move("128","396","150","48",null,null);

                p.Panel10.set_taborder("32");
                p.Panel10.set_type("vertical");
                p.Panel10.set_verticalgap("8");
                p.Panel10.set_flexgrow("1");
                p.Panel10.move("25","544","360","79",null,null);

                p.staTitle10.set_taborder("33");
                p.staTitle10.set_text("스핀박스");
                p.staTitle10.set_cssclass("sta_WF_Label");
                p.staTitle10.move("522","390","108","23",null,null);

                p.Spin00.set_taborder("34");
                p.Spin00.move("634","395","100%","48",null,null);

                p.Panel12.set_taborder("35");
                p.Panel12.set_flexgrow("1");
                p.Panel12.move("457","593","360","1",null,null);

                p.grd00.set_taborder("36");
                p.grd00.set_binddataset("dsDiv");
                p.grd00.set_autofittype("col");
                p.grd00.move("25","768","100%","170",null,null);
            	}
            );
            obj.set_flexwrap("wrap");
            obj.set_spacing("39px 39px 39px 39px ");
            obj.set_horizontalgap("16");
            obj.set_verticalgap("24");
            obj.set_type("horizontal");
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divDetail.form
            obj = new Layout("Layout0","",0,0,this.divDetail.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_spacing("23px 23px 23px 23px  ");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("16");
            obj.set_verticalgap("24");
            obj.set_type("horizontal");
            this.divDetail.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Div동적생성");

                p.Static00.set_taborder("0");
                p.Static00.set_text("동적생성");
                p.Static00.set_cssclass("sta_WF_H2_pc");
                p.Static00.set_fittocontents("width");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("0","0","140","60",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_cssclass("sta_WF_line");
                p.Static01.move("Static00:15","20","1","21",null,null);

                p.Static00_02.set_taborder("2");
                p.Static00_02.set_text("Dynamic");
                p.Static00_02.set_cssclass("sta_WF_ParaH4_pc");
                p.Static00_02.move("Static01:15","0","110","60",null,null);

                p.btnDivDel.set_taborder("3");
                p.btnDivDel.set_text("Div동적생성 삭제");
                p.btnDivDel.move(null,"100","165","48","133",null);

                p.btnDivAdd.set_taborder("4");
                p.btnDivAdd.set_text("Div동적생성");
                p.btnDivAdd.move(null,"100","125","48","0",null);

                p.divStep1.set_taborder("5");
                p.divStep1.set_url("sample::sampleDynamicDivLink.xfdl");
                p.divStep1.set_text("");
                p.divStep1.set_fittocontents("height");
                p.divStep1.set_accessibilityenable("false");
                p.divStep1.move("0","btnDivDel:24",null,"560","0",null);

                p.divDetail.set_taborder("6");
                p.divDetail.set_text("");
                p.divDetail.set_cssclass("div_WF_Detailbox");
                p.divDetail.set_fittocontents("height");
                p.divDetail.move("0","divStep1:40",null,"868","0",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",480,1720,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divStep1.move("0","btnDivDel:24",null,"560","0",null);

                p.divDetail.move("0","divStep1:40",null,"1408","0",null);
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
            this._addPreloadList("fdl","sample::sampleDynamicDivLink.xfdl");
        };
        
        // User Script
        this.registerScript("sampleDynamicDiv.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleDynamicDiv.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/14
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/14			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvCnt = 1;	// Div count
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnDivAdd_onclick = function(obj,e)
        {
        	var nCnt = this.dsDiv.rowcount;
        	var nRow = this.dsDiv.rowposition;
        	var nTop = 38;
        	if (nCnt > 0) {
        		var sCurDiv = this.dsDiv.getColumn(nRow, "divId");
        		var objCur  = this.components[sCurDiv];
        		nTop        = objCur.getOffsetBottom() + 10;
        	}

        	// count 증가
        	this.fvCnt++;

        	// Div 동적생성
        	var objDiv = new Div();
        	var sDivName = "divStep" + this.fvCnt;
        	objDiv.init(sDivName, 0, nTop, null, 200, 20, null);
        	objDiv.set_url("sample::sampleDynamicDivLink.xfdl");
        	this.addChild(sDivName, objDiv);
        	objDiv.show();

        	var nLastBottom = 0;
        	// 마지막 Div 추가 시
        	if (nRow == (nCnt-1)) {
        		nLastBottom = objDiv.getOffsetBottom();
        	}
        	// 중간 Div 삭제 시
        	else {
        		for (var i=nRow+1; i<nCnt; i++) {
        			var objComp = this.components[this.dsDiv.getColumn(i, "divId")];
        			trace("i : " + i + " / objComp.name : " + objComp.name);
        			objComp.move(0, objComp.getOffsetTop() + 200 + 10, null, objComp.getOffsetHeight(), 0);
        			nLastBottom = objComp.getOffsetBottom();
        		}
        	}

        	// 수정사유 Div 위치 조정
        	this.divDetail.move(0, nLastBottom + 10, null, this.divDetail.getOffsetHeight(), 0);

        	// 화면 갱신
        	this.resetScroll();

        	// Dataset에 Div 정보 추가
        	var nAddRow = this.dsDiv.insertRow(nRow+1);
        	this.dsDiv.setColumn(nAddRow, "divId", sDivName);
        };

        this.btnDivDel_onclick = function(obj,e)
        {
        	var nCnt = this.dsDiv.rowcount;
        	if (nCnt == 0) return;

        	var nRow   = this.dsDiv.rowposition;
        	var sDiv   = this.dsDiv.getColumn(nRow, "divId");
        	var objDiv = this.components[sDiv];

        	var nLastBottom = 0;
        	// 1개 Div 삭제 시
        	if (nCnt == 1) {
        		nLastBottom = 112 + 200;
        	}
        	// 마지막 Div 삭제시
        	else if (nCnt > 1 && nRow == (nCnt-1)) {
        		nLastBottom = objDiv.getOffsetBottom();
        	}
        	// 중간 Div 삭제 시
        	else {
        		for (var i=nRow+1; i<nCnt; i++) {
        			var objComp = this.components[this.dsDiv.getColumn(i, "divId")];
        			//trace("i : " + i + " / objComp.name : " + objComp.name);
        			nLastBottom = objComp.getOffsetBottom();
        			objComp.move(0, objComp.getOffsetTop() - 200 - 10, null, objComp.getOffsetHeight(), 0);
        		}
        	}

        	// Div 삭제
        	var objRtn = this.removeChild(sDiv);

        	// Dataset에 Div 정보 삭제
        	this.dsDiv.deleteRow(nRow);

        	var nLastRow = this.dsDiv.getRowCount() - 1;
        	var objLastDiv = this.components[this.dsDiv.getColumn(nLastRow, "divId")];

        	// 수정사유 Div 위치 조정
        	if(!this.gfnIsNull(objLastDiv))
        	{
        		let nLastBottom = objLastDiv.getOffsetBottom();
        		this.divDetail.move(0, nLastBottom + 10, null, this.divDetail.getOffsetHeight(), 0);
        	} else {
        		this.divDetail.move(0, 38, null, this.divDetail.getOffsetHeight(), 0);
        	}

        	// 화면 갱신
        	this.resetScroll();


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnDivDel.addEventHandler("onclick",this.btnDivDel_onclick,this);
            this.btnDivAdd.addEventHandler("onclick",this.btnDivAdd_onclick,this);
            this.divDetail.form.Div00.form.Button02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.divDetail.form.Div01.form.Button00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
        };
        this.loadIncludeScript("sampleDynamicDiv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
