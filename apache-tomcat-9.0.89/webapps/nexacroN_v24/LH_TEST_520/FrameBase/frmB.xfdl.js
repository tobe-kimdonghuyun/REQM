(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,680);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","30","35","234","49",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","30","96","234","49",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","30","176","234","49",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","30","270","234","49",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","30","356","234","49",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00_00","30","456","234","49",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","30","536","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","30","603","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",480,680,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmB.xfdl", function() {

        this.Grid00_oncellclick = function(obj,e)
        {
        	if (e.cell == 3)
        	{
        	   alert("버튼 클릭");
        	}
        };

        this.Button00_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_WF_ConClose") {
        		obj.cssclass = "btn_WF_ConOpen";
        		obj.accessibilitylabel = "영역 펼치기";
        	} else {
        		obj.cssclass = "btn_WF_ConClose";
        		obj.accessibilitylabel = "영역 숨기기";
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("frmB.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
