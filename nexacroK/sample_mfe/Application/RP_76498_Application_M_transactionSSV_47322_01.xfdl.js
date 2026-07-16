(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Application_M_transactionSSV_47322_01");
            this.set_titletext("Application_M_transactionSSV_47322_01");
            this.getSetter("classname").set("frm_TransXML");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_output", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "args","size" : "256","type" : "STRING"},{"id" : "method_name","size" : "256","type" : "STRING"},{"id" : "result","size" : "256","type" : "STRING"},{"id" : "exp_result","size" : "256","type" : "STRING"},{"id" : "comp_results","size" : "256","type" : "STRING"},{"id" : "run_code","size" : "256","type" : "STRING"},{"id" : "Mi_run_code","size" : "256","type" : "STRING"}]},"Rows" : [{"args" : "'Static00'","method_name" : "all","result" : "","exp_result" : "[object Static]","comp_results" : "","run_code" : "","Mi_run_code" : "Find(\"Static00\")"},{"args" : "'var1','10'","method_name" : "가나다","result" : "","exp_result" : "1","comp_results" : "","run_code" : "","Mi_run_code" : "AddVariable('var1','10')"},{"args" : "'var2','10'","method_name" : "addVariable","result" : "","exp_result" : "-1","comp_results" : "","run_code" : "","Mi_run_code" : "AddVariable('var2','10')"},{"args" : "0xA2","method_name" : "getKeyState","result" : "","exp_result" : "왼쪽Ctrl Press면 true","comp_results" : "","run_code" : "","Mi_run_code" : "IsDigit('123')"},{"args" : "'var2'","method_name" : "removeVariable","result" : "","exp_result" : "isExistVariable로 확인","comp_results" : "","run_code" : "","Mi_run_code" : "DeleteVariable('var2')"},{"args" : "'var2'","method_name" : "isExistVariable","result" : "","exp_result" : "false","comp_results" : "","run_code" : "","Mi_run_code" : "IsExistVariable(\"var2\""}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("btn_trans0","178","74","93","33",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_text("Transaction");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("grd_output","12","181",null,"125","10",null,null,null,null,null,this);
            obj.set_binddataset("ds_output");
            obj.set_formats("<Formats>\n  <Format id=\"default\">\n    <Columns>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n      <Col size=\"80\"/>\n    </Columns>\n    <Rows>\n      <Row band=\"head\" size=\"24\"/>\n      <Row band=\"body\" size=\"24\"/>\n    </Rows>\n    <Band id=\"head\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"args\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"method_name\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"result\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"exp_result\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"comp_results\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"run_code\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"Mi_run_code\"/>\n    </Band>\n    <Band id=\"body\">\n      <Cell col=\"0\" disptype=\"normal\" text=\"bind:args\"/>\n      <Cell col=\"1\" disptype=\"normal\" text=\"bind:method_name\"/>\n      <Cell col=\"2\" disptype=\"normal\" text=\"bind:result\"/>\n      <Cell col=\"3\" disptype=\"normal\" text=\"bind:exp_result\"/>\n      <Cell col=\"4\" disptype=\"normal\" text=\"bind:comp_results\"/>\n      <Cell col=\"5\" disptype=\"normal\" text=\"bind:run_code\"/>\n      <Cell col=\"6\" disptype=\"normal\" text=\"bind:Mi_run_code\"/>\n    </Band>\n  </Format>\n</Formats>\n");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"115\"/><Column size=\"174\"/><Column size=\"80\"/><Column size=\"45\"/><Column size=\"40\"/><Column size=\"45\"/><Column size=\"146\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"args\"/><Cell col=\"1\" text=\"method_name\"/><Cell col=\"2\" text=\"result\"/><Cell col=\"3\" text=\"exp_result\"/><Cell col=\"4\" text=\"comp_results\"/><Cell col=\"5\" text=\"run_code\"/><Cell col=\"6\" text=\"Mi_run_code\"/></Band><Band id=\"body\"><Cell text=\"bind:args\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:method_name\"/><Cell col=\"2\" text=\"bind:result\"/><Cell col=\"3\" text=\"bind:exp_result\"/><Cell col=\"4\" text=\"bind:comp_results\"/><Cell col=\"5\" text=\"bind:run_code\"/><Cell col=\"6\" text=\"bind:Mi_run_code\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_add","112","113","93","33",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_text("addRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_delete","213","113","93","33",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_text("deleteRow");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","8","69","58","43",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("DS옵션 :");
            obj.getSetter("wordwrap").set("none");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cb_dsopt","85","74","83","33",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_popuptype("center");
            obj.getSetter("position").set("absolute");
            obj.set_readonly("false");
            obj.set_taborder("16");
            var cb_dsopt_innerdataset = new nexacro.NormalDataset("cb_dsopt_innerdataset", obj);
            cb_dsopt_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "D","datacolumn" : "default"},{"codecolumn" : ":U","datacolumn" : ":U"},{"codecolumn" : ":A","datacolumn" : ":A"},{"codecolumn" : ":N","datacolumn" : ":N"}]});
            obj.set_innerdataset(cb_dsopt_innerdataset);
            obj.set_text(":N");
            obj.set_value(":N");
            obj.set_index("3");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("ta_result","12","314",null,"236","10",null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_application_menu","109","2","92","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("19");
            obj.set_text("◀Application");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","12","2","92","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("20");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta_popupdiv00","11","42","285","35",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("[Application_M_transactionSSV_47322_01] ");
            obj.getSetter("transparenthittest").set("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("rb_opt2","83","145","117","36",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_columncount("2");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.set_text("async");
            obj.set_value("async");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","8","145","65","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("통신종류 :");
            obj.getSetter("wordwrap").set("none");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("Div00","328","45","234","118",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("cb_dsopt","85","74","83","33",null,null,null,null,null,null,this.Div00.form);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_popuptype("center");
            obj.getSetter("position").set("absolute");
            obj.set_readonly("false");
            obj.set_taborder("0");
            var Div00_form_cb_dsopt_innerdataset = new nexacro.NormalDataset("Div00_form_cb_dsopt_innerdataset", obj);
            Div00_form_cb_dsopt_innerdataset._setContents({"ColumnInfo" : {"Column" : [{"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "D","datacolumn" : "default"},{"codecolumn" : ":U","datacolumn" : ":U"},{"codecolumn" : ":A","datacolumn" : ":A"},{"codecolumn" : ":N","datacolumn" : ":N"}]});
            obj.set_innerdataset(Div00_form_cb_dsopt_innerdataset);
            obj.set_text(":N");
            obj.set_value(":N");
            obj.set_index("3");
            this.Div00.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new nexacro.Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",440,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_output");
        };
        
        // User Script
        this.registerScript("RP_76498_Application_M_transactionSSV_47322_01.xfdl", function(nexacro, system, trace, environment, application) {
        this.btn_main_onclick = function(obj,  e)
        {
        	this.getOwnerFrame().set_formurl("Main_menu::Main.xfdl");
        }

        this.btn_application_menu_onclick = function(obj,  e)
        {
        	this.getOwnerFrame().set_formurl("Sub_menu::Application_menu2.xfdl");
        }

        this.btn_trans0_onclick = function(obj,  e)
        {
        	this.ta_result.set_value("");
        	var v_async = false;//(this.rb_opt2.value == 'async'?true:false);
        	//var v_dsopt = ":N";//(this.cb_dsopt.value == 'D'?'':this.cb_dsopt.value);

        	this.transaction("search"
        	           ,"http://172.10.12.23:8080/nexacro/jsp/s_typeds_ssv.jsp"
        	           ,"ds_output=ds_output"+this.cb_dsopt.value
        	           ,"ds_output=ds_output"
        	           ,"dsType="+this.cb_dsopt.value
        	           ,"fn_callback"
        	           ,v_async	//basync
        	           ,2
        	           );
        	  //동기/비동기 확인용.
        	  //alert();

        	this.ta_result.set_value(this.ta_result.value + "\ntransaction()");
        }

        this.fn_callback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	this.ta_result.set_value(this.ta_result.value + "총 건수 : " + this.ds_output.rowcount+"\nErrorCode : "+nErrorCode+"\nErrorMag : "+strErrorMag);
        }

        this.btn_add_onclick = function(obj,  e)
        {
        	this.ds_output.addRow();
        }

        this.btn_delete_onclick = function(obj,  e)
        {
        	this.ds_output.deleteRow(this.ds_output.rowposition);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_trans0.addEventHandler("onclick",this.btn_trans0_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_application_menu.addEventHandler("onclick",this.btn_application_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.sta_popupdiv00.addEventHandler("onclick",this.Static00_onclick,this);
        };

        this.loadIncludeScript("RP_76498_Application_M_transactionSSV_47322_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
