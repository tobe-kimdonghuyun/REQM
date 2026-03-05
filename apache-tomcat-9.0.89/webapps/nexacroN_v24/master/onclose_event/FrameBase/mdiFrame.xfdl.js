(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mdiFrame");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_mdiFormOpen","6","6","110","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("MDI Form Open");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","140","9","180","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("MDI Form Open2");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","334","10","138","18",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","491","9","138","18",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01","639","9","138","18",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_02","787","9","138","18",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_03","935","9","138","18",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_04","1083","6","138","18",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","9","52","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","170","54","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01","324","52","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_00","485","54","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_02","635","54","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_01","796","56","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01_00","950","54","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_00_00","1111","56","145","19",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","1232","13","33","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("mdiFrame.xfdl", function() {

        this.btn_mdiFormOpen_onclick = function(obj,e)
        {
        	this.fn_openMdi ("Base_main01", "Base::main01.xfdl");
        };
        this.cnt = 0;
        this.Button00_onclick = function(obj,e)
        {

        	this.setTimer(1,1000);


        };

        this.fn_openMdi = function(winId, url)
        {
        	var objChildFrame = new ChildFrame();

        	//objChildFrame.init(winId, 0, 0, 824, 608);
        	objChildFrame.init(winId, 0, 0, 1280, 720);

        	objChildFrame.set_formurl(url);
        	objChildFrame.set_resizable(true);
        	objChildFrame.set_openstatus("normal");

        	objChildFrame.set_showtitlebar(true);
        	objChildFrame.set_showcascadetitletext(true);
        	objChildFrame.set_showtitleicon(true);
        	objChildFrame.set_titlebarheight(35);
        	//objChildFrame.set_titletext(menuNm);

        	objChildFrame.set_border("0px none, 1px solid #888888, 1px solid #888888, 1px solid #888888");


        	//objChildFrame.addEventHandler("onactivate", this.fn_workFrame_onactivate, this);
        	objChildFrame.addEventHandler("onclose", this.fn_workFrame_onclose, this);

        	var objApp = nexacro.getApplication();
        	objApp.mainframe.vFrameSet.frameSet.addChild(winId, objChildFrame);

        	objChildFrame.show();
        };

        this.fn_workFrame_onclose = function(obj, e)
        {
        	trace("=======mdiFrame.xfdl_fn_workFrame_onclose========");
        };


        this.Button01_onclick = function(obj,e)
        {
        	this.fn_openMdi ("Base_main03", "Base::main02.xfdl");
        };

        this.Button01_00_onclick = function(obj,e)
        {
        	this.fn_openMdi ("Base_main04", "Base::main02.xfdl");
        };

        this.Button01_01_onclick = function(obj,e)
        {
        	this.fn_openMdi ("Base_main05", "Base::main02.xfdl");
        };

        this.Button01_02_onclick = function(obj,e)
        {
        	this.fn_openMdi ("Base_main06", "Base::main02.xfdl");
        };

        this.Button01_03_onclick = function(obj,e)
        {
        	this.fn_openMdi ("Base_main07", "Base::main02.xfdl");
        };

        this.Button01_04_onclick = function(obj,e)
        {
        	this.fn_openMdi ("Base_main08", "Base::main02.xfdl");
        };

        this.Button02_onclick = function(obj,e)
        {
        	this.fn_openMdi ("Base_main09", "Base::main02.xfdl");
        };

        this.Button02_00_onclick = function(obj,e)
        {
        	this.fn_openMdi ("Base_main10", "Base::main02.xfdl");
        };

        this.Button02_01_onclick = function(obj,e)
        {
        	this.fn_openMdi ("Base_main11", "Base::main02.xfdl");
        };

        this.Button02_00_00_onclick = function(obj,e)
        {
        	this.fn_openMdi ("Base_main12", "Base::main02.xfdl");
        };

        this.Button02_02_onclick = function(obj,e)
        {
        	this.fn_openMdi ("Base_main13", "Base::main02.xfdl");
        };

        this.Button02_00_01_onclick = function(obj,e)
        {
        	this.fn_openMdi ("Base_main14", "Base::main02.xfdl");
        };

        this.Button02_01_00_onclick = function(obj,e)
        {
        	this.fn_openMdi ("Base_main15", "Base::main02.xfdl");
        };

        this.Button02_00_00_00_onclick = function(obj,e)
        {
        	this.fn_openMdi ("Base_main16", "Base::main02.xfdl");
        };

        this.Button03_onclick = function(obj,e)
        {
        	var frames = nexacro.getApplication().mainframe.vFrameSet.frameSet.frames;

        	for (var i = frames.length - 1; i >= 0; i--) {
        		frames[i].form.close();
        	}
        };

        this.mdiFrame_onload = function(obj,e)
        {
        	this.fn_openMdi ("Base_main01", "Base::main01.xfdl");
        };

        this.mdiFrame_ontimer = function(obj,e)
        {trace("2");
        	if(e.timerid == 1)
        	{
        		trace("1");
        		if(this.cnt < 100){
        			this.cnt++;
        			this.fn_openMdi ("Base_main02"+this.cnt, "Base::main02.xfdl");
        		} else
        		{
        			this.killTimer(1);
        		}
        	};
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.mdiFrame_onload,this);
            this.addEventHandler("ontimer",this.mdiFrame_ontimer,this);
            this.btn_mdiFormOpen.addEventHandler("onclick",this.btn_mdiFormOpen_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button01_00.addEventHandler("onclick",this.Button01_00_onclick,this);
            this.Button01_01.addEventHandler("onclick",this.Button01_01_onclick,this);
            this.Button01_02.addEventHandler("onclick",this.Button01_02_onclick,this);
            this.Button01_03.addEventHandler("onclick",this.Button01_03_onclick,this);
            this.Button01_04.addEventHandler("onclick",this.Button01_04_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button02_00.addEventHandler("onclick",this.Button02_00_onclick,this);
            this.Button02_01.addEventHandler("onclick",this.Button02_01_onclick,this);
            this.Button02_00_00.addEventHandler("onclick",this.Button02_00_00_onclick,this);
            this.Button02_02.addEventHandler("onclick",this.Button02_02_onclick,this);
            this.Button02_00_01.addEventHandler("onclick",this.Button02_00_01_onclick,this);
            this.Button02_01_00.addEventHandler("onclick",this.Button02_01_00_onclick,this);
            this.Button02_00_00_00.addEventHandler("onclick",this.Button02_00_00_00_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };
        this.loadIncludeScript("mdiFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
