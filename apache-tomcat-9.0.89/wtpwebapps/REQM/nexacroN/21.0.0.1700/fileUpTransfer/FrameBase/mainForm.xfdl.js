(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mainForm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","5","5","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Transfer");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","58",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("Base::np_Upload_Transfer_All.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","Button00:10","5","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Upload");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",480,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Base::np_Upload_Transfer_All.xfdl");
        };
        
        // User Script
        this.registerScript("mainForm.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.Div00.set_url("Base::np_Upload_Transfer_All.xfdl")
        };

        this.Button00_00_onclick = function(obj,e)
        {
        	this.Div00.set_url("Base::np_FileUpDownload.xfdl")
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
        };
        this.loadIncludeScript("mainForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
