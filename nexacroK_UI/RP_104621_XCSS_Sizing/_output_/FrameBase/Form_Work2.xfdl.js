(function()
{
    return function(nexacro, system, trace)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work2");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Panel("Panel00","10","10","100","100",null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("1px solid #999");
            obj.set_fittocontents("both");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button_00_1\" id=\"PI_00_1\"/><PanelItem componentid=\"Button_00_2\" id=\"PI_00_2\"/><PanelItem componentid=\"Button_00_3\" id=\"PI_00_3\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_00_1","10","10","unset","unset",null,null,null,null,null,null,this);
            obj.set_text("패널0-버튼1");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_00_2","10","10","unset","unset",null,null,null,null,null,null,this);
            obj.set_text("패널0-버튼2");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button_00_3","10","10","unset","unset",null,null,null,null,null,null,this);
            obj.set_cssclass("userFit");
            obj.set_text("패널0-버튼3");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("Combo00","354","500","30.00%","44",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","354","410","5%","64",null,null,"0",null,null,null,this);
            obj.set_border("10px solid purple");
            obj.set_padding("10px");
            obj.set_taborder("1");
            obj.set_text("Button00");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("Form_Work2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
