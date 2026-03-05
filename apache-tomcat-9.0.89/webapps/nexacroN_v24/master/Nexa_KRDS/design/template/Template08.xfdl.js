(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Template01");
            this.set_titletext("Tab");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1022);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "checkBox","type" : "STRING","size" : "256"},{"id" : "Head01","type" : "STRING","size" : "256"},{"id" : "Head02","type" : "STRING","size" : "256"},{"id" : "Head03","type" : "STRING","size" : "256"},{"id" : "Head04","type" : "STRING","size" : "256"}]},"Rows" : [{},{},{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Page Title");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("height");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","60","54","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("필수캘린더");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01_00","10","41","108","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("20251230");
            obj.set_flexgrow("1");
            obj.set_cssclass("essential");
            obj.set_popupsize("384 437");
            obj.set_usetrailingday("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_02","9","290","218","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04\"/><PanelItem id=\"PanelItem02\" componentid=\"Calendar01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","70","64","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","100","10","108","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_flexgrow("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","20","51","108","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","0","0",null,"48","0",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_Sch");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"4","40","40","4",null,null,null,null,null,this.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.Div00_00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_03","436","290","218","48",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_flexgrow("1");
            obj.set_horizontalgap("10");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static04_00\"/><PanelItem id=\"PanelItem04\" componentid=\"Edit00_00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Div00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","24","24","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("16");
            obj.set_horizontalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_02\"/><PanelItem id=\"PanelItem02\" componentid=\"Panel00_03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","1215","590","128","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","1325","590","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Reset");
            obj.set_enable("true");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_04","1313","220","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_horizontalgap("8");
            obj.set_flexshrink("0");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","Static00:48",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_SchBar");
            obj.set_tablecellarea("");
            obj.set_horizontalgap("24");
            obj.set_fittocontents("height");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","57","372","120","56",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Tabpage1");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_TabLS");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","192","372","120","56",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Tabpage2");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_TabL");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","0","Panel00:54",null,"56","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","Panel01:16",null,"500","0",null,null,null,null,null,this);
            obj.set_url("design::template/Template09.xfdl");
            obj.set_taborder("16");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","64","1436","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("생성");
            obj.set_cssclass("btn_WF_CrudNew");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01","407","1450","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CrudModify");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_02","508","1443","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CrudSave");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_03","614","1452","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CrudDelete");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","Div00:40",null,"48","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("8");
            obj.set_flexwrap("wrap");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Button02_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Button02_03\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Edit02.set_taborder("0");
                p.Edit02.set_cssclass("edt_WF_Sch");
                p.Edit02.move("0","0",null,"48","0",null);

                p.Button01.set_taborder("1");
                p.Button01.set_cssclass("btn_WF_EdtSch");
                p.Button01.move(null,"4","40","40","4",null);
            	}
            );
            this.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_00_00.form
            obj = new Layout("Layout0","",0,0,this.Div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.Div00_00_00.form
            obj = new Layout("Layout0","",0,0,this.Div00_00_00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.Div00_00_00.form.addLayout(obj.name, obj);
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen,mobile_small",888,1022,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Tab");

                p.Static00.set_taborder("0");
                p.Static00.set_text("Page Title");
                p.Static00.set_cssclass("sta_WF_H2_pc");
                p.Static00.set_fittocontents("height");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("0","0",null,"60","0",null);

                p.Static04.set_taborder("1");
                p.Static04.set_text("필수캘린더");
                p.Static04.set_cssclass("sta_WF_SchDetail");
                p.Static04.set_flexshrink("0");
                p.Static04.move("60","54","100","48",null,null);

                p.Calendar01_00.set_taborder("2");
                p.Calendar01_00.set_value("20251230");
                p.Calendar01_00.set_flexgrow("1");
                p.Calendar01_00.set_cssclass("essential");
                p.Calendar01_00.set_popupsize("384 437");
                p.Calendar01_00.set_usetrailingday("true");
                p.Calendar01_00.move("10","41","108","48",null,null);

                p.Panel00_02.set_taborder("3");
                p.Panel00_02.set_flexgrow("1");
                p.Panel00_02.set_horizontalgap("10");
                p.Panel00_02.set_maxwidth("");
                p.Panel00_02.move("9","290","218","48",null,null);

                p.Static04_00.set_taborder("4");
                p.Static04_00.set_text("검색라벨");
                p.Static04_00.set_cssclass("sta_WF_SchDetail");
                p.Static04_00.set_flexshrink("0");
                p.Static04_00.move("70","64","100","48",null,null);

                p.Edit00_00_00.set_taborder("5");
                p.Edit00_00_00.set_flexgrow("1");
                p.Edit00_00_00.set_maxwidth("");
                p.Edit00_00_00.move("100","10","108","48",null,null);

                p.Div00_00_00.set_taborder("6");
                p.Div00_00_00.set_text("Div00");
                p.Div00_00_00.set_formscrollbartype("none none");
                p.Div00_00_00.set_formscrolltype("none");
                p.Div00_00_00.set_flexgrow("1");
                p.Div00_00_00.move("20","51","108","48",null,null);

                p.Panel00_03.set_taborder("7");
                p.Panel00_03.set_flexgrow("1");
                p.Panel00_03.set_horizontalgap("10");
                p.Panel00_03.set_maxwidth("");
                p.Panel00_03.move("436","290","218","48",null,null);

                p.Panel00_01.set_taborder("8");
                p.Panel00_01.set_flexwrap("wrap");
                p.Panel00_01.set_verticalgap("16");
                p.Panel00_01.set_horizontalgap("24");
                p.Panel00_01.set_fittocontents("height");
                p.Panel00_01.set_flexgrow("1");
                p.Panel00_01.set_maxwidth("");
                p.Panel00_01.move("24","24","100%","48",null,null);

                p.Button00_01.set_taborder("9");
                p.Button00_01.set_text("조회하기");
                p.Button00_01.set_cssclass("btn_WF_Sch");
                p.Button00_01.set_flexgrow("1");
                p.Button00_01.set_maxwidth("");
                p.Button00_01.move("1215","590","128","48",null,null);

                p.Button00_00_00.set_taborder("10");
                p.Button00_00_00.set_cssclass("btn_WF_Reset");
                p.Button00_00_00.set_enable("true");
                p.Button00_00_00.set_flexshrink("0");
                p.Button00_00_00.set_maxwidth("");
                p.Button00_00_00.move("1325","590","48","48",null,null);

                p.Panel00_04.set_taborder("11");
                p.Panel00_04.set_horizontalgap("8");
                p.Panel00_04.set_flexshrink("0");
                p.Panel00_04.set_flexgrow("1");
                p.Panel00_04.set_maxheight("");
                p.Panel00_04.set_maxwidth("");
                p.Panel00_04.move("1313","220","100%","48",null,null);

                p.Panel00.set_taborder("12");
                p.Panel00.set_spacing("40px");
                p.Panel00.set_cssclass("pnl_WF_SchBar");
                p.Panel00.set_tablecellarea("");
                p.Panel00.set_horizontalgap("24");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_verticalgap("24");
                p.Panel00.move("0","Static00:48",null,"200","0",null);

                p.Button00.set_taborder("13");
                p.Button00.set_text("Tabpage1");
                p.Button00.set_fittocontents("width");
                p.Button00.set_cssclass("btn_WF_TabLS");
                p.Button00.move("57","372","120","56",null,null);

                p.Button00_00.set_taborder("14");
                p.Button00_00.set_text("Tabpage2");
                p.Button00_00.set_fittocontents("width");
                p.Button00_00.set_cssclass("btn_WF_TabL");
                p.Button00_00.move("192","372","120","56",null,null);

                p.Panel01.set_taborder("15");
                p.Panel01.move("0","Panel00:54",null,"56","0",null);

                p.Div00.set_taborder("16");
                p.Div00.set_text("Div00");
                p.Div00.set_fittocontents("height");
                p.Div00.move("0","Panel01:16",null,"500","0",null);

                p.Button02_00.set_taborder("17");
                p.Button02_00.set_text("생성");
                p.Button02_00.set_cssclass("btn_WF_CrudNew");
                p.Button02_00.set_flexshrink("0");
                p.Button02_00.move("64","1436","90","48",null,null);

                p.Button02_01.set_taborder("18");
                p.Button02_01.set_text("수정");
                p.Button02_01.set_cssclass("btn_WF_CrudModify");
                p.Button02_01.set_flexshrink("0");
                p.Button02_01.move("407","1450","90","48",null,null);

                p.Button02_02.set_taborder("19");
                p.Button02_02.set_text("저장");
                p.Button02_02.set_cssclass("btn_WF_CrudSave");
                p.Button02_02.set_flexshrink("0");
                p.Button02_02.move("508","1443","90","48",null,null);

                p.Button02_03.set_taborder("20");
                p.Button02_03.set_text("삭제");
                p.Button02_03.set_cssclass("btn_WF_CrudDelete");
                p.Button02_03.set_flexshrink("0");
                p.Button02_03.move("614","1452","90","48",null,null);

                p.Panel02.set_taborder("21");
                p.Panel02.set_horizontalgap("8");
                p.Panel02.set_flexmainaxisalign("center");
                p.Panel02.set_verticalgap("8");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("0","Div00:40",null,"48","0",null);
            	}
            );
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",448,976,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_spacing("24px 16px");
                p.Panel00.move("0","Static00:24",null,"232","0",null);

                p.Panel01.move("0","Panel00:20",null,"56","0",null);

                p.Panel00_01.move("24","24","100%","112",null,null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Template08.xfdl", function() {

        this.Template01_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.Button00.cssclass = "btn_WF_TabLS";
        	this.Button00_00.cssclass = "btn_WF_TabL";
        	this.Div00.url ="design::template/Template09.xfdl";
        };

        this.Button00_00_onclick = function(obj,e)
        {
        	this.Button00.cssclass = "btn_WF_TabL";
        	this.Button00_00.cssclass = "btn_WF_TabLS";
        	this.Div00.url ="design::template/Template10.xfdl";
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Template01_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
        };
        this.loadIncludeScript("Template08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
