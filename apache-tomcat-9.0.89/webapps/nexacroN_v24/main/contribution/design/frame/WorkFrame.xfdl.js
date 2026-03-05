(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWork");
            this.set_titletext("Work");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,772);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","20","52",null,null,"0","20","1050",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("업무영역");
            obj.set_url("design::template/Temp02.xfdl");
            obj.set_cssclass("div_WF_Frame");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","0",null,"52","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("design::frame/Workcomm.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1070,772,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","design::template/Temp02.xfdl");
            this._addPreloadList("fdl","design::frame/Workcomm.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("WorkFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
