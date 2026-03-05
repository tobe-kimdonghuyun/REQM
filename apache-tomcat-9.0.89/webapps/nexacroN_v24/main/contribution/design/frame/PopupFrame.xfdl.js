(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PopupFrame");
            this.set_titletext("Popup");
            this.set_cssclass("frm_POP_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_POP_TitleBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","5","617","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("팝업타이틀");
            obj.set_cssclass("sta_POP_Title");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"5","34","31","8",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Close");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","25","40",null,"52","25",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_url("design::frame/Workcomm.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","0","72",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("design::template/Temp17_1.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","design::frame/Workcomm.xfdl");
            this._addPreloadList("fdl","design::template/Temp17_1.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("PopupFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
