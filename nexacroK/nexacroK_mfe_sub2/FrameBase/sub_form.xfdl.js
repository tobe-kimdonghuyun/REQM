(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sub_form");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","24","10","213","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("this.close");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","30","105","213","70",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("getEnvironment");
            this.addChild(obj.name, obj);

            obj = new nexacro.TextArea("TextArea00","514","17","366","229",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","260","108","222","65",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("getApplication");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","29","181","214","65",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("getPopupFrames");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sub_form.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        	this.close("sub_form close");
        };

        this.sub_form_onclose = function(obj,e)
        {

        };

        this.Button01_onclick = function(obj,e)
        {
        	this.TextArea00.value="";
        	let env_all = nexacro.getEnvironment();

        	if(env_all == null){
        		this.TextArea00.insertText("env_all = null");
        		return false;
        	}
        /*for( i in env_all)
        	{
        		if (typeof env_all[i] === "function") continue;
        		trace(i + " :: " + env_all[i]);
        	}
        	*/

        	this.TextArea00.insertText(" enableinspector  = "+env_all.enableinspector+
        								"\n enabletouchevent = "+env_all.enabletouchevent+
        								"\n tabkeycirculation = "+env_all.tabkeycirculation+
        								"\n filesecurelevel = "+env_all.filesecurelevel+
        								"\n networksecurelevel = "+env_all.networksecurelevel+
        								"\n datatyperule = "+env_all.datatyperule+
        								"\n Variables = "+ nexacro.getEnvironmentVariable('Variable0')+
        								"\n Cookies = "+ nexacro.getCookieVariable('Cookie0')+
        								"\n HeaderVariable = "+ nexacro.getHTTPHeaderVariable('header0'));


        };
        this.Button03_onclick = function(obj,e)
        {
        	this.TextArea00.deleteText()
        	trace(nexacro.getPopupFrames().length);
        	if(nexacro.getPopupFrames().length >0) {
        		this.TextArea00.insertText("nexacro.getPopupFrames()[0].id+ = "+nexacro.getPopupFrames()[0].id+"\n");
        		this.TextArea00.insertText("nexacro.getPopupFrames()[0].a+ = "+nexacro.getPopupFrames()[0].a+"\n");
        		this.TextArea00.insertText("nexacro.getPopupFrames()[0].b+ = "+nexacro.getPopupFrames()[0].b+"\n");
        		this.TextArea00.insertText("nexacro.getPopupFrames(this.getOwnerFrame()[0]) = "+nexacro.getPopupFrames(this.getOwnerFrame()[0])+"\n");
        	}else{
        		this.TextArea00.insertText("nexacro.getPopupFrames() is null");
        	}

        };

        this.Button02_onclick = function(obj,e)
        {
        	this.TextArea00.value="";
        	let app_all = nexacro.getApplication();

        	if(app_all == null){
        		this.TextArea00.insertText("app_all = null");
        		return false;
        	}
        	this.TextArea00.insertText(" id = "+app_all.id+
        								"\n screenid = "+app_all.screenid+
        								"\n Dataset = "+app_all.gds_nexacroK_mfe_sub2.id+", rowcount = "+app_all.gds_nexacroK_mfe_sub2.getRowCount()+
        								"\n app_variables = "+app_all.app_variable);


        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.sub_form_onclose,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };

        this.loadIncludeScript("sub_form.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=sub_form.xfdl.js.map
