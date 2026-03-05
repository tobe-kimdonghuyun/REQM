(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleRest");
            this.set_titletext("Rest API 통신");
            if (Form == this.constructor)
            {
                this._setFormPosition(888,1500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new DataObject("dataObjectRest", this);
            this.addChild(obj.name, obj);


            obj = new DataObject("dataObjectTR", this);
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "ID","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj.set_binddataobject("dataObjectTR");
            obj.set_dataobjectbindmode("twoway");
            obj.set_dataobjectpath("$.data[*]");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SAMPLE_ID","datapath" : "@.SAMPLE_ID","type" : "STRING","size" : "256"},{"id" : "SAMPLE_NM","datapath" : "@.SAMPLE_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DEPT_NM","datapath" : "@.SAMPLE_DEPT_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DESC","datapath" : "@.SAMPLE_DESC","type" : "STRING","size" : "256"},{"id" : "CHK","type" : "STRING","size" : "256"},{"id" : "ROWTYPE","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_binddataobject("dataObjectRest");
            obj.set_dataobjectbindmode("twoway");
            obj.set_dataobjectpath("$.data[*]");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SAMPLE_ID","datapath" : "@.SAMPLE_ID","type" : "STRING","size" : "256"},{"id" : "SAMPLE_NM","datapath" : "@.SAMPLE_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DEPT_NM","datapath" : "@.SAMPLE_DEPT_NM","type" : "STRING","size" : "256"},{"id" : "SAMPLE_DESC","datapath" : "@.SAMPLE_DESC","type" : "STRING","size" : "256"},{"id" : "CHK","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0","254","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Rest API 통신");
            obj.set_cssclass("sta_WF_H2_pc");
            obj.set_fittocontents("width");
            obj.set_accessibilityrole("heading2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","Static00:15","20","1","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_line");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","Static01:15","0","115","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Rest API");
            obj.set_cssclass("sta_WF_ParaH4_pc");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","100",null,"128","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SchBar");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            obj.set_tabstop("false");
            obj.set_fittocontents("height");
            this.addChild(obj.name, obj);

            obj = new Panel("Panel02","0","0","520","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("16");
            obj.set_flexgrow("1");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Panel("Panel00","0","0","230","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSearchTitle00\"/><PanelItem id=\"PanelItem01\" componentid=\"edtId\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchTitle00","24","24","80","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_SchDetail");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtId","80","24","160","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_accessibilitylabel("[@staSearchTitle00]");
            obj.set_flexgrow("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Panel("Panel01","274","0","230","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"staSearchTitle01\"/><PanelItem id=\"PanelItem01\" componentid=\"edtName\"/></Contents>");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchTitle01","edtId:24","24","80","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchDetail");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtName","80","24","160","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_accessibilitylabel("[@staSearchTitle01]");
            obj.set_flexgrow("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","743","24","120","48",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_visible("true");
            obj.set_flexgrow("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle","0","divSearch:40","342","38",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사용자 정보 조회");
            obj.set_cssclass("sta_WF_H4_pc");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitle:16",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.getSetter("uFunction").set("filterNew,sort");
            obj.set_tabstop("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"84\"/><Column size=\"290\"/><Column size=\"217\"/><Column size=\"229\"/><Column size=\"414\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"아이디\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:SAMPLE_ID\" displaytype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;text&apos;:&apos;none&apos;\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:SAMPLE_NM\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:SAMPLE_DEPT_NM\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/><Cell col=\"4\" text=\"bind:SAMPLE_DESC\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","790","487","400",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            obj.set_background("pink");
            obj.set_visible("true");
            obj.set_tabstop("false");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","12","4","460","39",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text(" Transaction 방식 TEST");
            obj.set_cssclass("sta_WF_H4_pc");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grdTr","12","49",null,"224","12",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"DESCRIPTION\"/><Cell col=\"2\" text=\"NAME\"/><Cell col=\"3\" text=\"ROWTYPE\"/><Cell col=\"4\" text=\"DEPARTMENT\"/><Cell col=\"5\" text=\"CHK\"/></Band><Band id=\"body\"><Cell text=\"bind:SAMPLE_ID\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:SAMPLE_DESC\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:SAMPLE_NM\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:ROWTYPE\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:SAMPLE_DEPT_NM\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:CHK\" edittype=\"normal\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnSelectTr","12","282","100","105",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("select");
            obj.set_cssclass("btn_WF_Custom");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnAddTr","120","283","109","48",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("add");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnDelTr","120","339","109","48",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_text("delete");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnUpdate","237","283","127","48",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("updateSave");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnDelete","237","339","127","48",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("deleteSave");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel00","120","283","109","104",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_horizontalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnAddTr\"/><PanelItem id=\"PanelItem01\" componentid=\"btnDelTr\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel01","237","283","119","104",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_flexwrap("wrap");
            obj.set_verticalgap("8");
            obj.set_horizontalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnUpdate\"/><PanelItem id=\"PanelItem01\" componentid=\"btnDelete\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel02","120","283","240","104",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_horizontalgap("8");
            obj.set_flexgrow("1");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Panel00\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel01\"/></Contents>");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnSaveAll",null,"282","100","105","15",null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_text("save");
            obj.set_cssclass("btn_WF_CrudSave");
            obj.set_flexgrow("1");
            this.div00.addChild(obj.name, obj);

            obj = new Panel("Panel03","12","282",null,"105","12",null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_horizontalgap("8");
            obj.set_verticalgap("8");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"btnSelectTr\"/><PanelItem id=\"PanelItem01\" componentid=\"Panel02\"/><PanelItem id=\"PanelItem02\" componentid=\"btnSaveAll\"/></Contents>");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel02.set_taborder("0");
                p.Panel02.set_flexwrap("wrap");
                p.Panel02.set_horizontalgap("24");
                p.Panel02.set_verticalgap("16");
                p.Panel02.set_flexgrow("1");
                p.Panel02.set_fittocontents("height");
                p.Panel02.move("0","0","520","48",null,null);

                p.Panel00.set_taborder("1");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("0","0","230","48",null,null);

                p.staSearchTitle00.set_taborder("2");
                p.staSearchTitle00.set_text("아이디");
                p.staSearchTitle00.set_cssclass("sta_WF_SchDetail");
                p.staSearchTitle00.move("24","24","80","48",null,null);

                p.edtId.set_taborder("3");
                p.edtId.set_accessibilitylabel("[@staSearchTitle00]");
                p.edtId.set_flexgrow("1");
                p.edtId.move("80","24","160","48",null,null);

                p.Panel01.set_taborder("4");
                p.Panel01.set_flexgrow("1");
                p.Panel01.move("274","0","230","48",null,null);

                p.staSearchTitle01.set_taborder("5");
                p.staSearchTitle01.set_text("성명");
                p.staSearchTitle01.set_cssclass("sta_WF_SchDetail");
                p.staSearchTitle01.move("edtId:24","24","80","48",null,null);

                p.edtName.set_taborder("6");
                p.edtName.set_accessibilitylabel("[@staSearchTitle01]");
                p.edtName.set_flexgrow("1");
                p.edtName.move("80","24","160","48",null,null);

                p.btnSearch.set_taborder("7");
                p.btnSearch.set_text("조회");
                p.btnSearch.set_cssclass("btn_WF_Sch");
                p.btnSearch.set_visible("true");
                p.btnSearch.set_flexgrow("0");
                p.btnSearch.move("743","24","120","48",null,null);
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_spacing("40px 40px 40px 40px");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("24");
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSearch.form
            obj = new Layout("Layout0","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel00.set_flexgrow("1");

                p.edtId.set_flexgrow("1");

                p.Panel02.move("0","0","100%","48",null,null);

                p.Panel01.set_flexgrow("1");

                p.edtName.set_flexgrow("1");

                p.btnSearch.set_flexgrow("1");
            	}
            );
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_spacing("40px 40px 40px 40px");
            obj.set_horizontalgap("24");
            obj.set_verticalgap("24");
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_text(" Transaction 방식 TEST");
                p.sta00.set_cssclass("sta_WF_H4_pc");
                p.sta00.move("12","4","460","39",null,null);

                p.grdTr.set_taborder("1");
                p.grdTr.set_autofittype("col");
                p.grdTr.set_binddataset("dsList4");
                p.grdTr.move("12","49",null,"224","12",null);

                p.btnSelectTr.set_taborder("2");
                p.btnSelectTr.set_text("select");
                p.btnSelectTr.set_cssclass("btn_WF_Custom");
                p.btnSelectTr.set_flexgrow("1");
                p.btnSelectTr.move("12","282","100","105",null,null);

                p.btnAddTr.set_taborder("3");
                p.btnAddTr.set_text("add");
                p.btnAddTr.set_flexgrow("1");
                p.btnAddTr.move("120","283","109","48",null,null);

                p.btnDelTr.set_taborder("4");
                p.btnDelTr.set_text("delete");
                p.btnDelTr.set_flexgrow("1");
                p.btnDelTr.move("120","339","109","48",null,null);

                p.btnUpdate.set_taborder("5");
                p.btnUpdate.set_text("updateSave");
                p.btnUpdate.set_flexgrow("1");
                p.btnUpdate.move("237","283","127","48",null,null);

                p.btnDelete.set_taborder("6");
                p.btnDelete.set_text("deleteSave");
                p.btnDelete.set_flexgrow("1");
                p.btnDelete.move("237","339","127","48",null,null);

                p.Panel00.set_taborder("7");
                p.Panel00.set_type("horizontal");
                p.Panel00.set_flexwrap("wrap");
                p.Panel00.set_verticalgap("8");
                p.Panel00.set_horizontalgap("8");
                p.Panel00.set_flexgrow("1");
                p.Panel00.move("120","283","109","104",null,null);

                p.Panel01.set_taborder("8");
                p.Panel01.set_flexwrap("wrap");
                p.Panel01.set_verticalgap("8");
                p.Panel01.set_horizontalgap("8");
                p.Panel01.set_flexgrow("1");
                p.Panel01.move("237","283","119","104",null,null);

                p.Panel02.set_taborder("9");
                p.Panel02.set_horizontalgap("8");
                p.Panel02.set_flexgrow("1");
                p.Panel02.move("120","283","240","104",null,null);

                p.btnSaveAll.set_taborder("10");
                p.btnSaveAll.set_text("save");
                p.btnSaveAll.set_cssclass("btn_WF_CrudSave");
                p.btnSaveAll.set_flexgrow("1");
                p.btnSaveAll.move(null,"282","100","105","15",null);

                p.Panel03.set_taborder("11");
                p.Panel03.set_horizontalgap("8");
                p.Panel03.set_verticalgap("8");
                p.Panel03.move("12","282",null,"105","12",null);
            	}
            );
            this.div00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div00.form
            obj = new Layout("Layout0","",0,0,this.div00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Panel01.set_flexgrow("1");
                p.Panel01.set_fittocontents("height");

                p.Panel00.set_flexgrow("1");
                p.Panel00.set_fittocontents("height");

                p.Panel02.set_flexgrow("1");
                p.Panel02.set_fittocontents("height");
                p.Panel02.set_maxwidth("");
                p.Panel02.move("120","283","400","104",null,null);

                p.btnUpdate.set_flexgrow("1");

                p.btnDelete.set_flexgrow("1");

                p.btnAddTr.set_flexgrow("1");

                p.btnDelTr.set_flexgrow("1");

                p.btnSaveAll.move(null,"282","400","48","15",null);

                p.btnSelectTr.move("12","282","400","48",null,null);

                p.Panel03.set_flexwrap("wrap");
                p.Panel03.set_fittocontents("height");
            	}
            );
            this.div00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",888,1500,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Rest API 통신");

                p.Static00.set_taborder("0");
                p.Static00.set_text("Rest API 통신");
                p.Static00.set_cssclass("sta_WF_H2_pc");
                p.Static00.set_fittocontents("width");
                p.Static00.set_accessibilityrole("heading2");
                p.Static00.move("0","0","254","60",null,null);

                p.Static01.set_taborder("1");
                p.Static01.set_cssclass("sta_WF_line");
                p.Static01.set_accessibilityenable("false");
                p.Static01.move("Static00:15","20","1","21",null,null);

                p.Static00_02.set_taborder("2");
                p.Static00_02.set_text("Rest API");
                p.Static00_02.set_cssclass("sta_WF_ParaH4_pc");
                p.Static00_02.move("Static01:15","0","115","60",null,null);

                p.divSearch.set_taborder("3");
                p.divSearch.set_cssclass("div_WF_SchBar");
                p.divSearch.set_text("");
                p.divSearch.set_accessibilityenable("false");
                p.divSearch.set_tabstop("false");
                p.divSearch.set_fittocontents("height");
                p.divSearch.move("0","100",null,"128","0",null);

                p.staTitle.set_taborder("4");
                p.staTitle.set_text("사용자 정보 조회");
                p.staTitle.set_cssclass("sta_WF_H4_pc");
                p.staTitle.move("0","divSearch:40","342","38",null,null);

                p.grdList.set_taborder("5");
                p.grdList.set_binddataset("dsList");
                p.grdList.set_autoenter("select");
                p.grdList.set_cellsizingtype("col");
                p.grdList.getSetter("uFunction").set("filterNew,sort");
                p.grdList.set_tabstop("false");
                p.grdList.move("0","staTitle:16",null,null,"0","0");

                p.div00.set_taborder("6");
                p.div00.set_text("div00");
                p.div00.set_background("pink");
                p.div00.set_visible("true");
                p.div00.set_tabstop("false");
                p.div00.set_accessibilityenable("false");
                p.div00.move("0","790","487","400",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","Desktop_screen,mobile_small",700,1500,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.divSearch.move("0","100",null,"200","0",null);

                p.div00.set_fittocontents("height");
                p.div00.move("0","790",null,"400","0",null);
            	}
            );
            obj.set_mobileorientation("Portrait");
            obj.set_type("default");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtId","value","dsSearch","ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtName","value","dsSearch","NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleRest.xfdl", function() {
        /**
        *  devPro
        *  @FileName 	sampleRest.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/04/18
        *  @Description
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/04/18			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvUrl = "";

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.fvUrl = nexacro.getEnvironment().services["svcUrl"].url;
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function()
        {
        	this.fnSearch();
        };

        //추가
        this.cfnAdd = function ()
        {
        	this.dsList.addRow();

        	this.grdList.setCellPos(0);
        	this.grdList.showEditor(true);
        };

        //삭제
        this.cfnDel = function ()
        {
        	var nRow = this.dsList.rowposition;
        	if( nRow<0 ) return;

        	this.dsList.deleteRow(nRow);
        };

        //저장
        this.cfnSave = function ()
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	// validation 체크 후
        	if (this.fnValidation()) {
        		// 서버 중복 체크
        		this.gfnAlert("confirm.save", [""], "save", "fnMsgCallback");
        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnSearch = function ()
        {
        	var objData = this.gfnDataset2JSON(this.dsSearch, 0);

        	var sParam = this.fnMakeParam(objData);

        	var param = {
        		'httpheader' : this.gfnGetHeaders(),
        	}

        	this.dataObjectRest.request("SEARCH", "GET", this.fvUrl + "rest/emp/searchSampleList.do" + sParam, param);
        };

        //저장
        this.fnSave = function ()
        {
        	this.dsList.applyChange();	//dataObjectRest_ondatachanged 발생
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	if (sMsgId == "save")
        	{
        		if (sRtn)
        		{
        			this.fnSave();
        		}
        	}
        	else if ( sMsgId=="validId")
        	{
        		this.dsList.setColumn(this.dsList.rowposition, "SAMPLE_ID", "");
        		this.grdList.setCellPos(0);
        		this.grdList.showEditor(true);
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //정합성체크
        this.fnValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "SAMPLE_ID"	   , "아이디"	, "required");
        	this.gfnSetValidation(this.dsList, "SAMPLE_NM"  , "이름"		, "required");

         	// Dataset의 변경된 Row Validation check
          	if (this.gfnValidation(this.grdList, "U") == false) return false;

        	return true;
        };

        //GET방식 파라미터 생성
        this.fnMakeParam = function(objData)
        {
        	var strParams = this.gfnToQueryString(objData);

        	if (!this.gfnIsNull(strParams))
        	{
        		return '?' + strParams;
        	}

        	return;
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        //ID중복체크
        this.dsList_cancolumnchange = function(obj,e)
        {
        	if ( e.columnid=="SAMPLE_ID")
        	{
        		if(this.gfnIsNull(e.newvalue)) return;

        		var nRow = this.dsList.findRow("SAMPLE_ID", e.newvalue);
        		if( nRow > -1)
        		{
        			this.gfnAlert("msg.exist", ["입력하신 아이디"],"validId","fnMsgCallback");
        			return;
        		}
        	}
        };

        this.dataObjectRest_onload = function(obj,e)
        {
        //	trace("dataObjectRest_onload");
        };

        this.dataObjectRest_onsuccess = function(obj,e)
        {
        	if (e.statuscode == 200 && e.method == "GET")
        	{
             //   trace("dataObjectRest_onsuccess:"+ obj.getAllResponseHeaders())
        	}
            else
            {
                e.preventDefault();
        		trace("dataObjectRest_onsuccess " + e.serviceid + " : " + e.statuscode);
            }
        };

        this.dataObjectRest_onerror = function(obj,e)
        {
        	trace("dataObjectRest_onerror " + e.statuscode +":"+e.errormsg);
        };

        this.dataObjectRest_ondatachanged = function(obj,e)
        {
        	trace("dataObjectRest_ondatachanged >> ");

        	var updatelist = e.infoarray;
        	for (var i = 0; i < updatelist.length; i++)
        	{
        		var item = updatelist[i];
        		var uid = item.uid;
        		var method = (item.type == "add") ? "POST" : (item.type == "update") ? "PUT" : "DELETE";
        		var senddata = JSON.stringify(item.data);
        		var id = item.data.SAMPLE_ID;
        		var param = {
        			'httpheader' : this.gfnGetHeaders(),
        			'postdata' : senddata
        		}

        		// request
        		if (method == "POST")
        			this.dataObjectRest.request(uid, method, this.fvUrl + "rest/emp/insert.do", param);
        		else if (method == "PUT")
        			this.dataObjectRest.request(uid, method, this.fvUrl + "rest/emp/update.do", param);
        		else
        			this.dataObjectRest.request(uid, method, this.fvUrl + "rest/emp/delete/"+id+".do");
        	}
        };

        this.dataObjectRest_onvaluechanged = function(obj,e)
        {
        	trace("dataObjectRest_onvaluechanged >> ");
        	/*
        	var uid = e.uid;
        	var method = "PUT";

        	var objddata = {};
        	objddata["id"] = obj.getObjectByPath(e.dataobjectpath)[e.index]["id"];
        	objddata["name"] = obj.getObjectByPath(e.dataobjectpath)[e.index]["name"];
        	objddata["department"] = obj.getObjectByPath(e.dataobjectpath)[e.index]["department"];
        	objddata["description"] = obj.getObjectByPath(e.dataobjectpath)[e.index]["description"];
        //	objddata[e.key] = e.value;	// changed column

        	var senddata = JSON.stringify(objddata);

            var param = {
        		'httpheader' : this.gfnGetHeaders(),
        		'postdata' : senddata
        	}

        	this.dataObjectRest.request(uid, method, this.fvUrl + "rest/emp/update", param);
        	*/
        };

        //////////////////////////////////////////////////////////////////////////////////////트랜잭션 스타일 시작

        this.btnSelectTr_onclick = function(obj,e)
        {
        	this.fnSearchRest();
        };

        this.btnUpdate_onclick = function(obj,e)
        {
        	var nRow = this.dsList4.rowposition;
        	var objData = this.gfnDataset2JSON(this.dsList4, nRow);

        	switch(this.dsList4.getRowType(nRow))
        	{
        		case Dataset.ROWTYPE_INSERT :
        			this.fnCreateList(objData);
        			break;
        		case Dataset.ROWTYPE_UPDATE :
        			this.fnUpdateList(objData);
        			break;
        	}
        };

        this.btnDelete_onclick = function(obj,e)
        {
        	this.fnDeleteList(this.dsList4);
        };

        this.btnSaveAll_onclick = function(obj,e)
        {
        	var objDs = this.dsList4;
        	// 리스트 생성
        	var arrData = new Array();
        	arrData = this.gfnDataset2JSONList(objDs, "U");

        	if (arrData.length == 0)
        	{
        		alert("수정된 데이터가 없습니다.");
        		return;
        	}

        	this.fnSaveRest(arrData, objDs);
        };

        this.btnAddTr_onclick = function(obj,e)
        {
        	this.dsList4.addRow();
        };

        this.btnDelTr_onclick = function(obj,e)
        {
        	this.dsList4.deleteRow(this.dsList4.rowposition);
        };

        this.fnSearchRest = function ()
        {
        	var strUrl = 'rest/emp/searchSampleList.do';
        	var objData = this.gfnDataset2JSON(this.dsSearch, 0);

        	var objReqData = {
        						"serviceid"	: "search",
        						"dataobject" : this.dataObjectTR,
        						"method"	: "GET",
        						"requesturl" : strUrl,
        						"postdata" : objData
        	}

        	this.gfnRequestDataObject(this, objReqData, function(strSvcId, nErrorCode, objResolveData) {
        //  		var strRequestUrl = objResolveData["url"];
        //  		var strStatusCode = objResolveData["status"];
        //  		var objResponseData = objResolveData["data"];
        //
        // 		if (nErrorCode < 0)
        // 		{
        // 			return;
        // 		}

        //		this.gfnObject2Dataset(objResolveData["data"].data, this.dsList4);
        		trace("완료");
        	});
        }

        this.fnCreateList = function(objData)
        {
        	var strUrl = 'rest/emp/insert.do';

        	var objReqData = {
        						"serviceid"	: "insert",
        						"dataobject" : this.dataObjectTR,
        						"method"	: "POST",
        						"requesturl" : strUrl,
        						"postdata" : objData
        	}

        	this.gfnRequestDataObject(this, objReqData, "fnCallbackDataObject");
        }

        this.fnUpdateList = function(objData)
        {
        	var strUrl = 'rest/emp/update.do';

        	var objReqData = {
        						"serviceid"	: "update",
        						"dataobject" : this.dataObjectTR,
        						"method"	: "PUT",
        						"requesturl" : strUrl,
        						"postdata" : objData
        	}

        	this.gfnRequestDataObject(this, objReqData, "fnCallbackDataObject");
        }

        this.fnDeleteList = function(objDs)
        {
        	var sId = objDs.getColumn(objDs.rowposition, "id");
        	var strUrl = 'rest/emp/delete/'+ sId + '.do';

        	var objReqData = {
        						"serviceid"	: "delete",
        						"dataobject" : this.dataObjectTR,
        						"method"	: "DELETE",
        						"requesturl" : strUrl
        	}

        	this.gfnRequestDataObject(this, objReqData, function(strSvcId, nErrorCode, objResolveData) {
        		var strRequestUrl = objResolveData["url"];
        		var strStatusCode = objResolveData["status"];
        		var objResponseData = objResolveData["data"];

        		if (nErrorCode < 0)
        		{
        			return;
        		}
        		this.alert("저장완료");
        		objDs.deleteRow(objDs.rowposition);
        		objDs.applyChange();
        	});
        }


        this.fnSaveRest = function(arrData, objDs)
        {
        	var strUrl = "rest/emp/save.do";
        	var objReqData = {
        						"serviceid"	: "save",
        						"dataobject" : this.dataObjectTR,
        						"method"	: "PUT",
        						"requesturl" : strUrl,
        						"postdata" : arrData
        	};

        	this.gfnRequestDataObject(this, objReqData, function(strSvcId, nErrorCode, objResolveData) {

        		if (nErrorCode < 0)
        		{
        			return;
        		}
        		else
        		{
        			this.alert("저장완료");
        			this.fnSearchRest();
        		}
        	});
        }

        this.fnCallbackDataObject = function(strSvcId, nErrorCode, objResolveData)
        {
        	trace(strSvcId + " , " + nErrorCode );
        //	trace(objResolveData);
        	this.fnSearchRest();
        }

        ////////////////////////////////////////////////////////////////////////////////////// 트랜잭션 스타일 끝

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.div00.form.btnSelectTr.addEventHandler("onclick",this.btnSelectTr_onclick,this);
            this.div00.form.btnAddTr.addEventHandler("onclick",this.btnAddTr_onclick,this);
            this.div00.form.btnDelTr.addEventHandler("onclick",this.btnDelTr_onclick,this);
            this.div00.form.btnUpdate.addEventHandler("onclick",this.btnUpdate_onclick,this);
            this.div00.form.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.div00.form.btnSaveAll.addEventHandler("onclick",this.btnSaveAll_onclick,this);
            this.dataObjectRest.addEventHandler("onload",this.dataObjectRest_onload,this);
            this.dataObjectRest.addEventHandler("onsuccess",this.dataObjectRest_onsuccess,this);
            this.dataObjectRest.addEventHandler("onerror",this.dataObjectRest_onerror,this);
            this.dataObjectRest.addEventHandler("ondatachanged",this.dataObjectRest_ondatachanged,this);
            this.dataObjectRest.addEventHandler("onvaluechanged",this.dataObjectRest_onvaluechanged,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("sampleRest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
