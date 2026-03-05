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
            this.set_titletext("Popup");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,960);
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
            this.addChild(obj.name, obj);

            obj = new Static("Static03","70","64","100","48",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사용자검색");
            obj.set_cssclass("sta_WF_SchDetail");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Div("Div00_00","10","41","380","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","0","0",null,"48","0",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_WF_Sch");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"4","40","40","4",null,null,null,null,null,this.Div00_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdtSch");
            this.Div00_00.addChild(obj.name, obj);

            obj = new Panel("Panel00_00","24","24","184","48",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem01\" componentid=\"Static03\"/><PanelItem id=\"PanelItem00\" componentid=\"Div00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1215","590","128","48",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회하기");
            obj.set_cssclass("btn_WF_Sch");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","1325","590","48","48",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Reset");
            obj.set_enable("true");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00_01","1313","220","184","48",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("end");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","Static00:48",null,"128","0%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_spacing("40px");
            obj.set_cssclass("pnl_WF_SchBar");
            obj.set_tablecellarea("");
            obj.set_horizontalgap("16");
            obj.set_fittocontents("height");
            obj.set_flexmainaxisalign("spacebetween");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("24");
            obj.set_flexcrossaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel00_01\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","64","1436","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("생성");
            obj.set_cssclass("btn_WF_CrudNew");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01","407","1450","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CrudModify");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_02","508","1443","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CrudSave");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_03","614","1452","90","48",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CrudDelete");
            obj.set_flexshrink("0");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","Panel00:150",null,"48","0.00%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_horizontalgap("8");
            obj.set_flexmainaxisalign("center");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button02\"/><PanelItem id=\"PanelItem01\" componentid=\"Button02_01\"/><PanelItem id=\"PanelItem02\" componentid=\"Button02_02\"/><PanelItem id=\"PanelItem03\" componentid=\"Button02_03\"/></Contents>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00_00.form,
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
            obj = new Layout("default","Desktop_screen",888,960,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Popup");

                p.Static00.set_taborder("0");
                p.Static00.set_text("Page Title");
                p.Static00.set_cssclass("sta_WF_H2_pc");
                p.Static00.move("0","0",null,"60","0",null);

                p.Static03.set_taborder("1");
                p.Static03.set_text("사용자검색");
                p.Static03.set_cssclass("sta_WF_SchDetail");
                p.Static03.set_flexshrink("0");
                p.Static03.move("70","64","100","48",null,null);

                p.Div00_00.set_taborder("2");
                p.Div00_00.set_text("Div00");
                p.Div00_00.set_formscrollbartype("none none");
                p.Div00_00.set_formscrolltype("none");
                p.Div00_00.move("10","41","380","48",null,null);

                p.Panel00_00.set_taborder("3");
                p.Panel00_00.set_flexgrow("1");
                p.Panel00_00.set_maxwidth("");
                p.Panel00_00.move("24","24","184","48",null,null);

                p.Button00.set_taborder("4");
                p.Button00.set_text("조회하기");
                p.Button00.set_cssclass("btn_WF_Sch");
                p.Button00.set_maxwidth("");
                p.Button00.move("1215","590","128","48",null,null);

                p.Button00_00.set_taborder("5");
                p.Button00_00.set_cssclass("btn_WF_Reset");
                p.Button00_00.set_enable("true");
                p.Button00_00.set_flexshrink("0");
                p.Button00_00.set_maxwidth("");
                p.Button00_00.move("1325","590","48","48",null,null);

                p.Panel00_01.set_taborder("6");
                p.Panel00_01.set_horizontalgap("8");
                p.Panel00_01.set_flexmainaxisalign("end");
                p.Panel00_01.set_flexgrow("1");
                p.Panel00_01.set_maxheight("");
                p.Panel00_01.set_maxwidth("");
                p.Panel00_01.move("1313","220","184","48",null,null);

                p.Panel00.set_taborder("7");
                p.Panel00.set_spacing("40px");
                p.Panel00.set_cssclass("pnl_WF_SchBar");
                p.Panel00.set_tablecellarea("");
                p.Panel00.set_horizontalgap("16");
                p.Panel00.set_fittocontents("height");
                p.Panel00.set_flexmainaxisalign("spacebetween");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_verticalgap("24");
                p.Panel00.set_flexcrossaxisalign("center");
                p.Panel00.move("0","Static00:48",null,"128","0%",null);

                p.Button02.set_taborder("8");
                p.Button02.set_text("생성");
                p.Button02.set_cssclass("btn_WF_CrudNew");
                p.Button02.set_flexshrink("0");
                p.Button02.move("64","1436","90","48",null,null);

                p.Button02_01.set_taborder("9");
                p.Button02_01.set_text("수정");
                p.Button02_01.set_cssclass("btn_WF_CrudModify");
                p.Button02_01.set_flexshrink("0");
                p.Button02_01.move("407","1450","90","48",null,null);

                p.Button02_02.set_taborder("10");
                p.Button02_02.set_text("저장");
                p.Button02_02.set_cssclass("btn_WF_CrudSave");
                p.Button02_02.set_flexshrink("0");
                p.Button02_02.move("508","1443","90","48",null,null);

                p.Button02_03.set_taborder("11");
                p.Button02_03.set_text("삭제");
                p.Button02_03.set_cssclass("btn_WF_CrudDelete");
                p.Button02_03.set_flexshrink("0");
                p.Button02_03.move("614","1452","90","48",null,null);

                p.Panel02.set_taborder("12");
                p.Panel02.set_horizontalgap("8");
                p.Panel02.set_flexmainaxisalign("center");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_verticalgap("8");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("0","Panel00:150",null,"48","0.00%",null);
            	}
            );
            obj.set_type("default");
            obj.set_flexwrap("wrap");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","mobile_small,Desktop_screen",448,960,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Button00.set_flexgrow("1");
                p.Button00.move("1215","590","500","48",null,null);

                p.Panel00_00.move("24","24","100%","48",null,null);

                p.Panel00_01.move("1313","220","100%","48",null,null);

                p.Panel00.move("0","Static00:24",null,"192","0%",null);
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
        this.registerScript("Template11.xfdl", function() {
        this.Template14_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        };

        this.Div00_00_Button01_onclick = function(obj,e)
        {
        	var sTitle = "사용자검색";
        	var oArg   = {};
        	var oOption = {
        		popuptype:"modal"	//modal,modaless
        		,title:sTitle
        		,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("popupModalDefault", "design::template/Template12.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	if(!this.gfnIsNull(sRtn))
        	{
        		var objRtn = JSON.parse(sRtn);
        		if(this.gfnIsNull(objRtn)) return;

        		if(!this.gfnIsNull(objRtn.rtnId))
        		{
        			trace(" 1. rtnId : " + objRtn.rtnId);
        		}
        		if(!this.gfnIsNull(objRtn.rtnName))
        		{
        			trace(" 2. rtnName : " + objRtn.rtnName);
        		}
        		if(!this.gfnIsNull( objRtn.rtnDepartment))
        		{
        			trace(" 3. rtnDepartment : " + objRtn.rtnDepartment);
        		}
        		if(!this.gfnIsNull( objRtn.rtnDescription))
        		{
        			trace(" 4. rtnDescription : " + objRtn.rtnDescription);
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Template14_onload,this);
            this.Div00_00.form.Button01.addEventHandler("onclick",this.Div00_00_Button01_onclick,this);
        };
        this.loadIncludeScript("Template11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
