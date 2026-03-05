(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("Edit01_00","44","35","192","71",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_displaynulltext("널텍스트");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","53","104","148","46",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","46","174","224","44",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("버튼 클릭 시 ↓버튼 보임");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","48","233","222","187",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","0","0","153","51",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("!!!!!!!!!!!!!버튼!!!!!!!!!!!!!!");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00","3","67","179","51",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("2222!!!!!!!!버튼!!!!!!!!2222");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01_00_00","5","132","190","51",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("3333!!!!!!!!!버튼!!!!!!!!!3333");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","48","441","221","56",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("버튼 클릭 시 ↑버튼 숨겨짐");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","47","522","196","57",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","51","606","192","71",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_displaynulltext("널텍스트");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("test2.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.Div00.visible = true;
        };

        this.Button02_onclick = function(obj,e)
        {
        	this.Div00.visible = false;
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("test2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
