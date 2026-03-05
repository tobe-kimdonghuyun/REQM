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
            this.set_titletext("Popup Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,792);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"},{"id" : "DEPARTMENT","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Panel("Panel02","24","24","1000","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tablecellarea("0/0");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Static04\"/><PanelItem id=\"PanelItem00\" componentid=\"Edit00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","60","54","60","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","94","24","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj.set_accessibilitylabel("성명");
            obj.set_displaynulltext("입력해주세요");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","1215","590","200","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_flexshrink("0");
            obj.set_flexgrow("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","1325","590","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Reset");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel03","1313","220","1000","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_horizontalgap("8");
            obj.set_tablecellarea("0/0");
            obj.set_flexgrow("1");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button03\"/><PanelItem id=\"PanelItem01\" componentid=\"Button04\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","40","40",null,"200","40",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("pnl_WF_SchBar");
            obj.set_tablecellarea("");
            obj.set_spacing("40px");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("24");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","36","1033","100%","48",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사용자 리스트");
            obj.set_cssclass("sta_WF_H4_pc");
            obj.set_accessibilityrole("heading4");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","128","1107","100%","38",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("총 <fc v=\'#0B50D0\'><b v=\'true\'>00</b></fc>건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_PaddingB16");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","41","1088","100%","212",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("Dataset00");
            obj.set_flexgrow("1");
            obj.set_showcellselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"아이디\" displaytype=\"normal\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직급\"/></Band><Band id=\"body\"><Cell text=\"bind:checkBox\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:Head01\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:Head02\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:Head03\" displaytype=\"normal\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01_00","39","89","100%","254",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("4");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static10\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel01","40","Panel00:40",null,"400","40",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_tablecellarea("0/0");
            obj.set_cssclass("pnl_WF_Detailbox");
            obj.set_flexwrap("wrap");
            obj.set_spacing("39px");
            obj.set_verticalgap("2");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static09\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"Panel01:24","90","48","138",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"Panel01:24","90","48","40",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",700,792,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Popup Form");

                p.Panel02.set_taborder("1");
                p.Panel02.set_tablecellarea("0/0");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_maxwidth("");
                p.Panel02.move("24","24","1000","48",null,null);

                p.Static04.set_taborder("2");
                p.Static04.set_text("성명");
                p.Static04.set_cssclass("sta_WF_SchDetail");
                p.Static04.set_flexshrink("0");
                p.Static04.move("60","54","60","48",null,null);

                p.Edit00.set_taborder("3");
                p.Edit00.set_flexgrow("1");
                p.Edit00.set_accessibilitylabel("성명");
                p.Edit00.set_displaynulltext("입력해주세요");
                p.Edit00.set_maxwidth("");
                p.Edit00.move("94","24","100%","48",null,null);

                p.Button03.set_taborder("3");
                p.Button03.set_text("조회하기");
                p.Button03.set_cssclass("btn_WF_Sch");
                p.Button03.set_flexshrink("0");
                p.Button03.set_flexgrow("1");
                p.Button03.set_minwidth("");
                p.Button03.move("1215","590","200","48",null,null);

                p.Button04.set_taborder("4");
                p.Button04.set_cssclass("btn_WF_Reset");
                p.Button04.set_enable("true");
                p.Button04.set_maxwidth("");
                p.Button04.move("1325","590","48","48",null,null);

                p.Panel03.set_taborder("5");
                p.Panel03.set_horizontalgap("8");
                p.Panel03.set_tablecellarea("0/0");
                p.Panel03.set_flexgrow("1");
                p.Panel03.set_flexmainaxisalign("center");
                p.Panel03.set_maxheight("");
                p.Panel03.set_maxwidth("");
                p.Panel03.move("1313","220","1000","48",null,null);

                p.Panel00.set_taborder("6");
                p.Panel00.set_cssclass("pnl_WF_SchBar");
                p.Panel00.set_tablecellarea("");
                p.Panel00.set_spacing("40px");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_horizontalgap("24");
                p.Panel00.set_verticalgap("24");
                p.Panel00.set_fittocontents("height");
                p.Panel00.move("40","40",null,"200","40",null);

                p.Static09.set_taborder("7");
                p.Static09.set_text("사용자 리스트");
                p.Static09.set_cssclass("sta_WF_H4_pc");
                p.Static09.set_accessibilityrole("heading4");
                p.Static09.move("36","1033","100%","48",null,null);

                p.Static10.set_taborder("8");
                p.Static10.set_text("총 <fc v=\'#0B50D0\'><b v=\'true\'>00</b></fc>건");
                p.Static10.set_usedecorate("true");
                p.Static10.set_cssclass("sta_WF_PaddingB16");
                p.Static10.move("128","1107","100%","38",null,null);

                p.Grid00.set_taborder("9");
                p.Grid00.set_binddataset("Dataset00");
                p.Grid00.set_flexgrow("1");
                p.Grid00.set_showcellselection("true");
                p.Grid00.move("41","1088","100%","212",null,null);

                p.Panel01_00.set_taborder("10");
                p.Panel01_00.set_flexwrap("wrap");
                p.Panel01_00.set_verticalgap("4");
                p.Panel01_00.move("39","89","100%","254",null,null);

                p.Panel01.set_taborder("11");
                p.Panel01.set_tablecellarea("0/0");
                p.Panel01.set_cssclass("pnl_WF_Detailbox");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_spacing("39px");
                p.Panel01.set_verticalgap("2");
                p.Panel01.move("40","Panel00:40",null,"400","40",null);

                p.Button01.set_taborder("12");
                p.Button01.set_text("취소");
                p.Button01.move(null,"Panel01:24","90","48","138",null);

                p.Button00.set_taborder("13");
                p.Button00.set_text("확인");
                p.Button00.set_cssclass("btn_WF_Crud");
                p.Button00.move(null,"Panel01:24","90","48","40",null);
            	}
            );
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","mobile_small",400,700,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_spacing("23px 15px");
                p.Panel01.move("24","212",null,"400","24",null);

                p.Panel00.set_spacing("24px 16px");
                p.Panel00.move("24","24",null,"168","24",null);

                p.Panel03.move("1313","220","100%","48",null,null);

                p.Panel02.move("24","24","100%","48",null,null);

                p.Button00.move(null,"Panel01:16","90","48","24",null);

                p.Button01.move(null,"628","90","48","122",null);
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
        this.registerScript("Template12.xfdl", function() {
        this.Template14_1_onload = function(obj,e)
        {
        	//this.gfnFormOnload(obj,e); //필수함수
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.close();
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Template14_1_onload,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Template12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
