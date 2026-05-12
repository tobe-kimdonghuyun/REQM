(function()
{
    return function(nexacro, system, trace)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            this.getSetter("onrootcssclasschanged").set("Form_Work_onrootcssclasschanged");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","80","75","30em","65",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("A 창 열기 (em width 적용)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","80","160","360","72",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("B 창 열기");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","191","280","70","59",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("다크/라이트 토글");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","80","374","180","53",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("filter = \"viewport\"");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04","267","374","173","53",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("filter = \"\"");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03_00","80","437","180","53",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("filter = \"colorscheme\"");
            this.addChild(obj.name, obj);

            obj = new nexacro.Static("Static00","87","292","91","35",null,null,null,null,null,null,this);
            obj.set_background("pink");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("Div00","87","510","287","134",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","50","35","30em","65",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Content Button  (em width 적용)");
            this.Div00.addChild(obj.name, obj);

            obj = new nexacro.Div("Div01","490","495","284","150",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div01");
            obj.set_url("FrameBase::Form_Inner.xfdl");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button05","78","694","100","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Button05");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new nexacro.Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new nexacro.Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new nexacro.Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","FrameBase::Form_Inner.xfdl");
        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function(nexacro, system, trace) {
        var app = nexacro.getApplication();

        this.Button00_onclick = function(obj,e)
        {
        	nexacro.open('popup_A', 'FrameBase::Form_Work.xfdl');
        };

        this.Button01_onclick = function(obj,e)
        {
        	nexacro.open('popup_B', 'FrameBase::Form_Work.xfdl');
        };

        this.Button02_onclick = function(obj,e)
        {
        	if (app.xcssgroup == "")
        		app.xcssgroup = "Dark";
        	else
        		app.xcssgroup = "";

        	this.Static00.text = app.xcssgroup;
        };

        this.Button03_onclick = function(obj,e)
        {
        	app.xcssgroupfilter = "viewport";
        };

        this.Button04_onclick = function(obj,e)
        {
        	app.xcssgroupfilter = "";
        };

        this.Button03_00_onclick = function(obj,e)
        {
        	app.xcssgroupfilter = "colorscheme";
        };

        this.doSomething = function()
        {
        	// window.document.title = "변경" + Date.now();
        };

        this.Form_Work_onactivate = function(obj,e)
        {
        	// window.document.title = "활성화" + Date.now();
        };

        this.Form_Work_onload = function(obj,e)
        {

        };

        this.Form_Work_onrootcssclasschange = function(obj,e)
        {
        	console.log('Form :' + e.precssclass + '/' + e.postcssclass);
        };

        this.Button05_onclick = function(obj,e)
        {
        	nexacro.loadStyle("xcssrc::C.xcss");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onactivate",this.Form_Work_onactivate,this);
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.addEventHandler("onrootcssclasschange",this.Form_Work_onrootcssclasschange,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button03_00.addEventHandler("onclick",this.Button03_00_onclick,this);
            this.Div00.form.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
        };

        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
