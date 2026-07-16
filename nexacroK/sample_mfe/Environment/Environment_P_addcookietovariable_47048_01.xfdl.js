(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Application_P_addcookietovariable_47048_01");
            this.set_titletext("Application_P_addcookietovariable_47048_01");
            this.getSetter("classname").set("22925_TransactionXML_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(440,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds_math", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "args","size" : "256","type" : "STRING"},{"id" : "method_name","size" : "256","type" : "STRING"},{"id" : "result","size" : "256","type" : "STRING"},{"id" : "exp_result","size" : "256","type" : "STRING"},{"id" : "comp_results","size" : "256","type" : "STRING"},{"id" : "run_code","size" : "256","type" : "STRING"},{"id" : "Mi_run_code","size" : "256","type" : "STRING"}]},"Rows" : [{"args" : "'Static00'","method_name" : "all","result" : "","exp_result" : "[object Static]","comp_results" : "","run_code" : "","Mi_run_code" : "Find(\"Static00\")"},{"args" : "'var1','10'","method_name" : "addVariable","result" : "","exp_result" : "1","comp_results" : "","run_code" : "","Mi_run_code" : "AddVariable('var1','10')"},{"args" : "'var2','10'","method_name" : "addVariable","result" : "","exp_result" : "-1","comp_results" : "","run_code" : "","Mi_run_code" : "AddVariable('var2','10')"},{"args" : "0xA2","method_name" : "getKeyState","result" : "","exp_result" : "왼쪽Ctrl Press면 true","comp_results" : "","run_code" : "","Mi_run_code" : "IsDigit('123')"},{"args" : "'var2'","method_name" : "removeVariable","result" : "","exp_result" : "isExistVariable로 확인","comp_results" : "","run_code" : "","Mi_run_code" : "DeleteVariable('var2')"},{"args" : "'var2'","method_name" : "isExistVariable","result" : "","exp_result" : "false","comp_results" : "","run_code" : "","Mi_run_code" : "IsExistVariable(\"var2\""}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.TextArea("TextArea00","10","317","281","124",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("0");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","10","150","281","98",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_math");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"68\"/><Column size=\"106\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"133\"/><Column size=\"80\"/><Column size=\"148\"/><Column size=\"47\"/><Column size=\"40\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"args\"/><Cell col=\"1\" text=\"method_name\"/><Cell col=\"2\" text=\"result\"/><Cell col=\"3\" text=\"exp_result\"/><Cell col=\"4\" text=\"comp_results\"/><Cell col=\"5\" text=\"run_code\"/><Cell col=\"6\" text=\"Mi_run_code\"/><Cell col=\"7\" text=\"rtype\"/><Cell col=\"8\" text=\"ridx\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" text=\"bind:args\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" text=\"bind:method_name\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" text=\"bind:result\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"normal\" text=\"bind:exp_result\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"normal\" text=\"bind:comp_results\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"normal\" text=\"bind:run_code\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"normal\" text=\"bind:Mi_run_code\"/><Cell col=\"7\" expr=\"expr:ds_math.getRowType(currow)\"/><Cell col=\"8\" expr=\"currow\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("c_opt","111","61","113","28",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_text(":N");
            obj.set_value(":N");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static06","7","61","89","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("Dataset옵션");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta_popupdiv00","11","39","293","25",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("[Environment_P_addcookietovariable_47048_01]");
            obj.getSetter("transparenthittest").set("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","15","95","41","18",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("건수: ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","54","93","50","24",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_value("10");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_application_menu","109","2","92","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("◀Application");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","12","2","92","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","10","257","138","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("addcookietovariable");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit01","156","254","45","31",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_value("false");
            obj.set_text("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04","15","288","60","29",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","83","288","60","29",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","227","288","60","29",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","112","91","112","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_text("건수별 조회");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",440,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_math");
        };
        
        // User Script
        this.registerScript("Environment_P_addcookietovariable_47048_01.xfdl", function(nexacro, system, trace, environment, application) {
        this.btn_main_onclick = function(obj,  e)
        {
        	this.getOwnerFrame().set_formurl("Base::Main.xfdl");
        }

        this.btn_application_menu_onclick = function(obj,  e)
        {
        	this.getOwnerFrame().set_formurl("Sub_menu::Application_menu2.xfdl");
        }

        this.fn_callback = function(strSvcID, nErrorCode, strErrorMag)
        {
            //this.sleep(5000);
        	this.TextArea00.set_value("gVariablesexist : " + application.gVariablesexist + "\n " + "gVariablescreate : " + application.gVariablescreate + "\n " + "총 건수 : " + this.ds_math.rowcount+"\nErrorCode : "+nErrorCode+"\nErrorMag : "+strErrorMag);
        }

        this.Button02_onclick = function(obj,  e)
        {
        	//this.transaction("search02","http://172.10.13.91:8080/x-api/HTML5_JSP/inc_XMLCount_cookie.jsp","ds_math=ds_math"+this.c_opt.value,"ds_math=ds_math", "dataCnt="+this.Edit00.value,"fn_callback");
        	this.transaction("search02","http://172.10.12.177:8080/nexacro16/jsp/inc_XMLCount_cookie.jsp","ds_math=ds_math"+this.c_opt.value,"ds_math=ds_math", "dataCnt="+this.Edit00.value,"fn_callback");
        }

        this.Button04_onclick = function(obj,  e)
        {
        	nexacro.getEnvironment().set_addcookietovariable(this.Edit01.value);
        	this.TextArea00.set_value(this.TextArea00.value + "\naddcookietovariable set : " + nexacro.getEnvironment().addcookietovariable);
        }

        this.Button00_onclick = function(obj,  e)
        {
        	this.TextArea00.set_value(this.TextArea00.value + "\naddcookietovariable get : " + nexacro.getEnvironment().addcookietovariable);
        }

        this.Button01_onclick = function(obj,  e)
        {
        	this.TextArea00.set_value("");
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.sta_popupdiv00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_application_menu.addEventHandler("onclick",this.btn_application_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.ds_math.addEventHandler("onrowposchanged",this.ds_math_onrowposchanged,this);
        };

        this.loadIncludeScript("Environment_P_addcookietovariable_47048_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
