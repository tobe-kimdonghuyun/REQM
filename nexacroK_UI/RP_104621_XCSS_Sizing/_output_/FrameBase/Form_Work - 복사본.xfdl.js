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
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","98","73",null,null,null,null,null,null,null,null,this);
            obj.set_cssclass("userA");
            obj.set_font("26pt \"Arial\"");
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","Button00:5","85","Button00:30%","86",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","100","Button00:30","96","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Move(150, 150)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel00","345.00","49",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("3px solid yellow");
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button04\" id=\"PanelItem02\"/><PanelItem componentid=\"Button03\" id=\"PanelItem00\"/><PanelItem componentid=\"Button06\" id=\"PanelItem03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Panel("Panel01","645.00","49",null,null,null,null,null,null,null,null,this);
            obj.set_background("lightgray");
            obj.set_border("3px solid yellow");
            obj.set_fittocontents("both");
            obj.set_taborder("3");
            obj.set_type("vertical");
            obj._setContents("<Contents><PanelItem componentid=\"Button041\" id=\"PanelItem02\"/><PanelItem componentid=\"Button031\" id=\"PanelItem00\"/><PanelItem componentid=\"Button061\" id=\"PanelItem03\"/></Contents>");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","424","265","100","20",null,null,null,null,null,null,this);
            obj.set_flexshrink("0");
            obj.set_taborder("4");
            obj.set_text("패널 버튼 2 (JS)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button04","507","414",null,"47",null,null,null,null,null,null,this);
            obj.set_cssclass("userA");
            obj.set_flexshrink("0");
            obj.set_taborder("5");
            obj.set_text("패널 버튼 1 (XCSS)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button031","424","265","100","20",null,null,null,null,null,null,this);
            obj.set_flexshrink("0");
            obj.set_taborder("4");
            obj.set_text("패널 버튼 2 (JS)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button041","507","414",null,"47",null,null,null,null,null,null,this);
            obj.set_cssclass("userA");
            obj.set_flexshrink("0");
            obj.set_taborder("5");
            obj.set_text("패널 버튼 1 (XCSS)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("Combo00","354","335","30%","44",null,null,"100","400",null,null,this);
            obj.set_taborder("6");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("Combo00_00","354","396",null,null,null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("Combo00_01","354","500","30%","44",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Combo("Combo00_02","354","560",null,null,null,null,"100","400",null,null,this);
            obj.set_taborder("9");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new nexacro.PopupDiv("PopupDiv00","790","273",null,null,null,null,null,null,null,null,this);
            obj.set_background("purple");
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button001","9","12","120","50",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("Button001");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02_00","100.00","Button02:7","96","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Resize(150, 150)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button05","100.00","Button02_00:7","96","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("PopupDiv");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button06","553","126",null,null,null,null,null,null,null,null,this);
            obj.set_cssclass("userFit");
            obj.set_flexshrink("0");
            obj.set_taborder("16");
            obj.set_text("패널 버튼 (Fit)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button061","553","126",null,null,null,null,null,null,null,null,this);
            obj.set_cssclass("userFit");
            obj.set_flexshrink("0");
            obj.set_taborder("16");
            obj.set_text("패널 버튼 (Fit)");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("Div01","37","394","15%","303",null,null,null,null,null,null,this);
            obj.set_background("chocolate");
            obj.set_taborder("14");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Div("Div00","0","100","100%","166",null,null,null,null,null,null,this.Div01.form);
            obj.set_background("cornflowerblue");
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.Div01.addChild(obj.name, obj);

            obj = new nexacro.Button("Button002","35","56",null,null,null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_cssclass("userB");
            obj.set_flexgrow("1");
            obj.set_taborder("0");
            obj.set_text("Button002");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new nexacro.Button("Button001","160","23",null,null,null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_cssclass("userB");
            obj.set_taborder("1");
            obj.set_text("Button001");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new nexacro.Button("Button003","23","21",null,"50",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Button003");
            this.Div01.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this.PopupDiv00.form
            obj = new nexacro.Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form.Div00.form
            obj = new nexacro.Layout("default","",0,0,this.Div01.form.Div00.form,function(p){});
            obj.set_type("horizontal");
            this.Div01.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
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

        };
        
        // User Script
        this.registerScript("Form_Work - 복사본.xfdl", function(nexacro, system, trace) {


        this.Button02_onclick = function(obj,e)
        {
        	this.Button00.move(150, 150);
        };

        this.Button05_onclick = function(obj,e)
        {
        	this.PopupDiv00.trackPopup(100, 100);
        };

        this.Button03_onclick = function(obj,e)
        {
        	obj.height = 1300;
        };

        this.Button02_00_onclick = function(obj,e)
        {
        	this.Button00.resize(100, 150);
        };

        this.Button06_onclick = function(obj,e)
        {
        	if(obj.cssclass == "userFit")
        		obj.cssclass = "";
        	else
        		obj.cssclass = "userFit";
        };

        this.Button07_onclick = function(obj,e)
        {
        	this.resetScroll();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button031.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button02_00.addEventHandler("onclick",this.Button02_00_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
            this.Button061.addEventHandler("onclick",this.Button06_onclick,this);
        };

        this.loadIncludeScript("Form_Work - 복사본.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
