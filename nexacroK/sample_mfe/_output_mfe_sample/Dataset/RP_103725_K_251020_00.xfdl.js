(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("K_251020_00");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.TextArea("TextArea00","20","170","759","330",null,null,null,null,null,null,this);
            obj.set_readonly("true");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("btnClear","659","115","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Clear");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00","30","30","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("saveCSV");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","149","30","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("saveSSV");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","268","30","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("saveXML");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button03","387","30","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("saveJSON");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","mobile,medium,large,desktop",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_103725_K_251020_00.xfdl", function(nexacro, system, trace, environment, application) {
        var ds01 = new Dataset();
        ds01.id = "ds01";
        ds01.addColumn("customer", "string", {
                "size": 100,
                "label": "고객",
                "grade": "VIP", "contactable": "Y"
            });

        ds01.addColumn("price", "int", {
                "size": 10,
                "label": "제품",
                "currency": "USD", "discount": "가능"
            });

        ds01.addConstColumn("company", "테스트00", {
        		"type": "string",
        		"size": 20,
        		"lable": "회사",
        		"env" : "PROD",
        		"region": "US"
        	});

        ds01.addConstColumn("release", "테스트01", {
        		"type": "string",
        		"size": 30,
        		"lable": "릴리즈",
        		"build" : "2.0.1023",
        		"date" : "2025-10-15"
        	});

        this.tracePrint = function (str) {
        	this.TextArea00.insertText(str + "\n");
        }

        this.btnClear_onclick = function(obj,e)
        {
        	this.TextArea00.value = "";

        };

        this.Button00_onclick = function(obj,e)
        {
        	this.tracePrint(ds01.saveCSV());
        };

        this.Button01_onclick = function(obj,e)
        {
        	this.tracePrint(ds01.saveSSV());
        };

        this.Button02_onclick = function(obj,e)
        {
        	this.tracePrint(ds01.saveXML());
        };

        this.Button03_onclick = function(obj,e)
        {
        	this.tracePrint(ds01.saveJSON());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btnClear.addEventHandler("onclick",this.btnClear_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };

        this.loadIncludeScript("RP_103725_K_251020_00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
