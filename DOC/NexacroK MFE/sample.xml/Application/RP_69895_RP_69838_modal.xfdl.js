(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("modal");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","227","61","165","51",null,null,null,null,null,null,this);
            obj.set_color("");
            obj.set_taborder("0");
            obj.set_text("showmodal");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","39","61","169","51",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("nexacro.open");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","484","64","105","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("get parameters");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","3.81%","180","14.75%","104",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static01","4.79%","264","40.53%","80",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static02","4.79%","365","40.53%","83",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","224","0","165","51",null,null,null,null,null,null,this);
            obj.set_color("");
            obj.set_taborder("0");
            obj.set_text("showmodal");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04","636","65","106","39",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Button04");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button05","39","125","169","51",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("nexacro.open");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit00","263","203","147","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new nexacro.Edit("Edit01","252","675","208","65",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button06","256","609","216","44",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Button06");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1024,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");

                p.Button00.set_color("");
                p.Button00.set_taborder("0");
                p.Button00.set_text("showmodal");
                p.Button00.move("227","61","165","51",null,null);

                p.Button01.set_taborder("1");
                p.Button01.set_text("nexacro.open");
                p.Button01.move("39","61","169","51",null,null);

                p.Button02.set_taborder("2");
                p.Button02.set_text("get parameters");
                p.Button02.move("484","64","105","45",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_text("Static00");
                p.Static00.move("3.81%","180","14.75%","104",null,null);

                p.Static01.set_taborder("3");
                p.Static01.set_text("Static00");
                p.Static01.move("4.79%","264","40.53%","80",null,null);

                p.Static02.set_taborder("3");
                p.Static02.set_text("Static00");
                p.Static02.move("4.79%","365","40.53%","83",null,null);

                p.Button03.set_color("");
                p.Button03.set_taborder("0");
                p.Button03.set_text("showmodal");
                p.Button03.move("224","0","165","51",null,null);

                p.Button04.set_taborder("7");
                p.Button04.set_text("Button04");
                p.Button04.move("636","65","106","39",null,null);

                p.Button05.set_taborder("8");
                p.Button05.set_text("nexacro.open");
                p.Button05.move("39","125","169","51",null,null);

                p.Edit00.set_taborder("9");
                p.Edit00.move("263","203","147","32",null,null);

                p.Edit01.set_taborder("10");
                p.Edit01.move("252","675","208","65",null,null);

                p.Button06.set_taborder("11");
                p.Button06.set_text("Button06");
                p.Button06.move("256","609","216","44",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new nexacro.Layout("Layout0","desktop_D",1024,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_69895_RP_69838_modal.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        	var objParentFrame = this.getOwnerFrame();
        	var newChild = new ChildFrame;

        	newChild.init("test_modeless","absolute",  300, 300, 350, 300, null, null, "Application::RP_69895_RP_69838_modal.xfdl");
        	newChild.set_layered(true);
        	newChild.set_dragmovetype("all");   // titlebar & form 모두 이벤트 가능

        	var ret = newChild.showModal(objParentFrame,{a:'arg1', b:'arg2'}, this, "fn_callback");
        	//var ret = newChild.showModeless(objParentFrame,{a:'arg1', b:'arg2'}, this, "fn_callback");
        };

        this.fn_callback = function(a, b)
        {
        	trace( "fn_callback " );
        }

        this.Form_onload = function(obj,e)
        {
        	 this.Static01.set_text( nexacro._log + " \n Form_onload:"+ (new Date()));
        	  this.Static02.set_text("nexacro._createPopupFrame Start:"+  nexacro._starttime);
        };

        this.Form_oninit = function(obj,e)
        {

        };

        this.Button01_onclick = function(obj,e)
        {

            this.Static00.set_text("button click Start:"+ new Date());

        	var objParentFrame = this.getOwnerFrame();
        	var bSucc;

        	//this.setTimer(0,2000);

        	nexacro._init_count =  new Date();
        	trace(nexacro._init_count  );
        	bSucc = nexacro.open("modeless" , "Application::RP_69895_RP_69838_modal.xfdl", objParentFrame, {a:'aaa', b:'bbb'}, "showtitlebar=true showstatusbar=false", 0, 0);



        };

        this.Form_ontimer = function(obj,e)
        {
        	if (e.timerid == 0)
        	{
        		this.killTimer(0);

        		var objParentFrame = this.getOwnerFrame();
        		var newChild = new ChildFrame;

        		newChild.init("test_modeless","absolute",  300, 300, 350, 300, null, null, "Application::RP_69895_RP_69838_modal.xfdl");
        		newChild.set_layered(true);
        		newChild.set_dragmovetype("all");   // titlebar & form 모두 이벤트 가능

        		var ret = newChild.showModal(objParentFrame,{a:'arg1', b:'arg2'}, this, "fn_callback");
        	}
        };

        this.Button02_onclick = function(obj,e)
        {
        	var objParentFrame = this.getOwnerFrame();
        	trace(objParentFrame.a, objParentFrame.b);
        };

        this.Button03_onclick = function(obj,e)
        {
        	//trace("nexacro.getPopupFrames:"+nexacro.getPopupFrames().length);
        	var objParentFrame = this.getOwnerFrame();
        	var newChild = new ChildFrame;

        	newChild.init("test_modeless1", 300, 300, 350, 300, null, null, "Application::RP_69895_RP_69838_modal.xfdl");
        	newChild.set_layered(true);
        	newChild.set_dragmovetype("all");   // titlebar & form 모두 이벤트 가능

        	var ret = newChild.showModal(objParentFrame,{a:'arg1', b:'arg2'}, this, "fn_callback");
        };

        this.Button04_onclick = function(obj,e)
        {
        	this.close();
        };

        this.Button05_onclick = function(obj,e)
        {
        	 this.Static00.set_text("button click Start:"+ new Date());

        	var objParentFrame = this.getOwnerFrame();
        	var bSucc;

        	//this.setTimer(0,2000);

        	nexacro._init_count =  new Date();
        	trace(nexacro._init_count  );
        	bSucc = nexacro.open("modeless1" , "Application::RP_69895_RP_69838_modal.xfdl", objParentFrame, {a:'aaa', b:'bbb'}, "showtitlebar=true showstatusbar=false", 0, 0);
        };

        this.Button08_onclick = function(obj,e)
        {
        	alert(nexacro._log);
        };

        this.Button09_onclick = function(obj,e)
        {
        if (_application._runbase_window)
        {
        trace("_application._runbase_window:"+_application._runbase_window.id);
        	if (_application._runbase_window._popupframes)
        	{
        	trace("_application._runbase_window._popupframes.length:"+_application._runbase_window._popupframes.length);
        	}
        }

        	if (this._getWindow())
        	{
        		trace("this._getWindow().id		:"+ this._getWindow().id	);
        		if (this._getWindow()._popupframes)
        		{
        			var len = this._getWindow()._popupframes.length;
        			for (var i = 0; i < len; i++)
        				trace("this._getWindow()._popupframes[i].name:"+ this._getWindow()._popupframes[i].value);
        		}
        	}

        	var a = nexacro.getPopupFrames();
        	var len = a.length;
        	for (var i = 0; i < len; i++)
        	{
        	    var value = a[i];
        		if (value)
        		{
        		 //  for (var  k in value)
        		   {
        		//	 alert("value[" + k + "]" + value[k]);
        			//alert("value:"+ value + " value.id :"+ value.id + " value.parent:"+ value.parent);
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.Form_oninit,this);
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_ontimer,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button09_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
        };

        this.loadIncludeScript("RP_69895_RP_69838_modal.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
