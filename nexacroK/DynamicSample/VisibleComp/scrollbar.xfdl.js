(function()
{
    const fn = function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test123213");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","440","314","201","86",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00","439","600","201","100",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button00_00_00","1289","403","201","100",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button02");
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
        this.registerScript("scrollbar.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {


        	var objRadio = new nexacro.Radio("Radio", 30, 120, 196, 46, null, null);

        	// Add Object to Parent Form
        	this.addChild("Radio", objRadio);


        	// Show Object
        	objRadio.show();
        	 var dsId = "ds_rad_1" ;
        	 var ds   = new nexacro.Dataset(dsId, this);
            this.addChild(dsId, ds);
            ds.addColumn("CODE", "String", 10);
            ds.addColumn("NAME", "String", 40);
            var aItems = [["M","남성"],["F","여성"],["N","미선택"]];
            if (this.nRadCount % 2 == 0) aItems = [["A","매우만족"],["B","만족"],["C","보통"],["D","불만족"]];
            for (var i = 0; i < aItems.length; i++) {
                var r = ds.addRow();
                ds.setColumn(r, "CODE", aItems[i][0]);
                ds.setColumn(r, "NAME", aItems[i][1]);
            }
        	  objRadio.set_innerdataset(dsId);
            objRadio.set_codecolumn("CODE");
            objRadio.set_datacolumn("NAME");


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button00_onclick,this);
        };

        this.loadIncludeScript("scrollbar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
    if (document.currentScript)
        document.currentScript.dispatchEvent(new CustomEvent("loadModule", { detail: fn }));

    return fn;
}
)();

//# sourceMappingURL=scrollbar.xfdl.js.map
