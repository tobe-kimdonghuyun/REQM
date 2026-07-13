(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Application_M_open_01");
            this.set_titletext("Application_M_open_01");
            this.getSetter("classname").set("23711_Buttoncssimage_01");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(580,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "1"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.GroupBox("grb00","261","67","278","174",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","6","4","301","37",null,null,null,null,null,null,this);
            obj.set_text("[Application_M_open_01]");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn_showModeless","6","65","124","50",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Open\r\n(parent = null)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","13","152","124","39",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_value("Open");
            this.addChild(obj.name, obj);

            obj = new nexacro.CheckBox("CheckBox00","140","152","101","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("CheckBox00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","293","123","215","37",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("setEnvironmentVariable");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit01","293","83","97","32",null,null,null,null,null,null,this);
            obj.getSetter("aa").set("aa");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit02","405","85","97","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","292","175","216","37",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("getEnvironmentVariable");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","137","65","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("open");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn01","30","292","151","43",null,null,null,null,null,null,this);
            obj.set_background("url(\'theme://images/blank.png\') repeat 10% 10px");
            obj.set_taborder("10");
            obj.set_text("popupframe");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("div00","268","269","269","155",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btn00","45","24","120","50",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.div00.addChild(obj.name, obj);

            obj = new nexacro.Button("btn02","223","375","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new nexacro.Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","",580,450,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new nexacro.BindItem("item0","btn02","text","ds00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("nexacro_open.xfdl", function(nexacro, system, trace, environment, application) {



        //showModal
        this.btn_showModal_onclick = function(obj,  e)
        {
        	//var ret = application.open("Open", "Base::Application_M_open_02.xfdl", this, {arg1:'aaa', arg2:this.Edit00.value, arg3:this.CheckBox00.value}, "showtitlebar=true showstatusbar=false", 100, 100);
        //	var ret = nexacro.open("Open", "Environment::Environment_httpvariable.xfdl", this.getOwnerFrame(), {arg1:'aaa', arg2:this.Edit00.value, arg3:this.CheckBox00.value}, "showtitlebar=true showstatusbar=false", 100, 100);
        //	var ret = nexacro.open("Open", "Environment::openurl.xfdl", this.getOwnerFrame(), {arg1:'aaa', arg2:this.Edit00.value, arg3:this.CheckBox00.value}, "showtitlebar=true showstatusbar=false", 100, 100);
        	var ret = nexacro.open("Open", "Environment::openurl.xfdl", null, {arg1:'aaa', arg2:this.Edit00.value, arg3:this.CheckBox00.value}, "showtitlebar=true showstatusbar=false", 100, 100);
        //	var ret = nexacro.open("Open1", "Application::Application_M_open_02.xfdl", this.getOwnerFrame(), "", "showtitlebar=true showstatusbar=false", 100, 100);
        //	this.txt_result.set_value(this.txt_result.value +"\n"+ "Open return :: " + ret);
        	//this.Edit00.set_value("showModeless");
        }

        this.btn_clear_onclick = function(obj,  e)
        {
        //	this.txt_result.set_value("");
        }

        this.Button00_onclick = function(obj,e)
        {
        	nexacro.setEnvironmentVariable(this.Edit01.value, this.Edit02.value);
        };


        this.Button02_onclick = function(obj,e)
        {
        	alert(nexacro.getEnvironmentVariable(this.Edit01.value));
        };




        this.btn00_onclick = function(obj,e)
        {
        	var ret = nexacro.open("Open1", "Environment::openurl.xfdl", this.getOwnerFrame(), {arg1:'aaa', arg2:this.Edit00.value, arg3:this.CheckBox00.value}, "showtitlebar=true showstatusbar=false", 100, 100);

        };

        this.btn01_onclick = function(obj,e)
        {
        	const popupframes = nexacro.getPopupFrames();
        	const cnt = popupframes.length;
        	for (let i = 0; i <cnt; i++)
        	{
        		alert("index:"+ i + " frame.formurl:"+ popupframes[i].formurl + " frame.id:"+ popupframes[i].id + " parent:"+ popupframes[i].parent +"\n");
        	}
        };

        this.btn02_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.test_grid_setFormatColProperty_onload,this);
            this.btn_showModeless.addEventHandler("onclick",this.btn_showModal_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
        };

        this.loadIncludeScript("nexacro_open.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
