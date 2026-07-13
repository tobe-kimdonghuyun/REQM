(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Environment_P_usehttpkeepalive_01");
            this.set_titletext("Environment_P_usehttpkeepalive_01");
            this.getSetter("classname").set("22925_TransactionXML_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(310,450);
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
            obj = new nexacro.TextArea("TextArea00","10","349","281","92",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("0");
            obj.set_value("//");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","10","208","281","139",null,null,null,null,null,null,this);
            obj.set_binddataset("ds_math");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"68\"/><Column size=\"106\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"133\"/><Column size=\"80\"/><Column size=\"148\"/><Column size=\"47\"/><Column size=\"40\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"args\"/><Cell col=\"1\" text=\"method_name\"/><Cell col=\"2\" text=\"result\"/><Cell col=\"3\" text=\"exp_result\"/><Cell col=\"4\" text=\"comp_results\"/><Cell col=\"5\" text=\"run_code\"/><Cell col=\"6\" text=\"Mi_run_code\"/><Cell col=\"7\" text=\"rtype\"/><Cell col=\"8\" text=\"ridx\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" text=\"bind:args\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" text=\"bind:method_name\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" text=\"bind:result\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"normal\" text=\"bind:exp_result\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"normal\" text=\"bind:comp_results\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"normal\" text=\"bind:run_code\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"normal\" text=\"bind:Mi_run_code\"/><Cell col=\"7\" expr=\"expr:ds_math.getRowType(currow)\"/><Cell col=\"8\" expr=\"currow\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("c_opt","122","150","122","28",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_text(":N");
            obj.set_value(":N");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static06","15","150","89","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("Dataset옵션");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta_popupdiv00","11","39","253","25",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("[Environment_P_usehttpkeepalive_01]");
            obj.getSetter("transparenthittest").set("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","79","174","41","18",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("건수: ");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","118","180","50","24",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_value("20");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button05","174","178","122","28",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_text("건수별 조회");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_Form_menu","93","1","67","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_text("◀Form");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_main","8","1","81","36",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_text("◀◀Main");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_idx1","167","8","24","24",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_text("1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_idx2","194","8","24","24",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_idx3","222","8","24","24",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_text("3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_idx4","250","8","24","24",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_text("4");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_idx5","278","9","24","24",null,null,null,null,null,null,this);
            obj.set_enable("false");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_text("5");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta_popupdiv01","11","91","59","25",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("httpretry :: ");
            obj.getSetter("transparenthittest").set("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit01","78","90","66","24",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_value("3");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","176","90","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","232","90","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta_popupdiv02","11","63","59","25",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("httptimeout :: ");
            obj.getSetter("transparenthittest").set("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit02","78","62","66","24",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_value("3");
            obj.set_text("10");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","176","62","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","232","62","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04","250","344","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("sta_popupdiv03","11","119","62","24",null,null,null,null,null,null,this);
            obj.getSetter("position").set("absolute");
            obj.set_text("keepalive ::");
            obj.getSetter("transparenthittest").set("true");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button06","176","118","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("set");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button07","232","118","46","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("get");
            this.addChild(obj.name, obj);

            obj = new nexacro.Radio("Radio00","85","121","83","21",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",310,450,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","ds_math");
        };
        
        // User Script
        this.registerScript("Environment_P_usehttpkeepalive_161014.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button05_onclick = function(obj,  e)
        {
        	//application.transaction("search02","http://172.10.13.91:8080/x-api/HTML5_JSP/inc_XMLCount_nexacro.jsp","ds_math=ds_math"+this.c_opt.value,"ds_math=ds_math", "dataCnt="+this.Edit00.value,"fn_callback");
        	//this.transaction("search02","http://172.10.13.91:8080/x-api/HTML5_JSP/inc_XMLCount_nexacro.jsp","ds_math=ds_math"+this.c_opt.value,"ds_math=ds_math", "dataCnt="+this.Edit00.value,"fn_callback");
        	this.transaction("search02","http://172.10.12.177:8080/nexacro16/jsp/inc_XMLCount_all.jsp","ds_math=ds_math"+this.c_opt.value,"ds_math=ds_math", "dataCnt="+this.Edit00.value,"fn_callback");
        	//application.cancelTransaction();
        	//application.cancelTransaction();
        }

        this.btn_idx1_onclick = function(obj,  e)
        {
        	this.getOwnerFrame().set_formurl("Component_Form::Form_M_transactionBinary_47953_01.xfdl");
        }

        this.btn_idx2_onclick = function(obj,  e)
        {
        	this.getOwnerFrame().set_formurl("Component_Form::Form_M_transactionCVS_47953_02.xfdl");
        }

        this.btn_idx3_onclick = function(obj,  e)
        {
        	this.getOwnerFrame().set_formurl("Component_Form::Form_M_transactionPrefix_47953_03.xfdl");
        }

        this.btn_idx4_onclick = function(obj,  e)
        {
        	this.getOwnerFrame().set_formurl("Component_Form::Form_M_transactionSSV_47953_04.xfdl");
        }
        this.btn_main_onclick = function(obj,  e)
        {
        	this.getOwnerFrame().set_formurl("Main_menu::Main.xfdl");
        }

        this.btn_Form_menu_onclick = function(obj,  e)
        {
        	this.getOwnerFrame().set_formurl("Sub_menu::Form_menu4.xfdl");
        }

        this.fn_callback = function(strSvcID, nErrorCode, strErrorMag)
        {
        	this.TextArea00.set_value("총 건수 : " + this.ds_math.rowcount+"\nErrorCode : "+nErrorCode+"\nErrorMag : "+strErrorMag);
        }

        this.Button00_onclick = function(obj,e)
        {
        	nexacro.getEnvironment().set_httpretry(parseInt(this.Edit01.value));
        	this.TextArea00.set_value(this.TextArea00.value + "\n httpretry set :: " + nexacro.getEnvironment().httpretry)
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.TextArea00.set_value(this.TextArea00.value + "\n httpretry get :: " + nexacro.getEnvironment().httpretry)
        };

        this.Button02_onclick = function(obj,e)
        {
        	nexacro.getEnvironment().set_httptimeout(parseInt(this.Edit02.value));
        	this.TextArea00.set_value(this.TextArea00.value + "\n httptimeout set :: " + nexacro.getEnvironment().httptimeout)
        };

        this.Button03_onclick = function(obj,e)
        {
        	this.TextArea00.set_value(this.TextArea00.value + "\n httptimeout get :: " + nexacro.getEnvironment().httptimeout)
        };

        this.Button04_onclick = function(obj,e)
        {
        	this.TextArea00.set_value("//");
        };

        this.Button06_onclick = function(obj,e)
        {
        	var keep = this.Radio00.index == 1 ? true:false;
        	nexacro.getEnvironment().set_usehttpkeepalive(keep);
        	this.TextArea00.set_value(this.TextArea00.value + "\n usehttpkeepalive set :: " + nexacro.getEnvironment().usehttpkeepalive)
        };

        this.Button07_onclick = function(obj,e)
        {
        	this.TextArea00.set_value(this.TextArea00.value + "\n usehttpkeepalive get :: " + nexacro.getEnvironment().usehttpkeepalive)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.sta_popupdiv00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.btn_Form_menu.addEventHandler("onclick",this.btn_Form_menu_onclick,this);
            this.btn_main.addEventHandler("onclick",this.btn_main_onclick,this);
            this.btn_idx1.addEventHandler("onclick",this.btn_idx1_onclick,this);
            this.btn_idx2.addEventHandler("onclick",this.btn_idx2_onclick,this);
            this.btn_idx3.addEventHandler("onclick",this.btn_idx3_onclick,this);
            this.btn_idx4.addEventHandler("onclick",this.btn_idx4_onclick,this);
            this.sta_popupdiv01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.sta_popupdiv02.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.sta_popupdiv03.addEventHandler("onclick",this.Static00_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
            this.Button07.addEventHandler("onclick",this.Button07_onclick,this);
        };

        this.loadIncludeScript("Environment_P_usehttpkeepalive_161014.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
