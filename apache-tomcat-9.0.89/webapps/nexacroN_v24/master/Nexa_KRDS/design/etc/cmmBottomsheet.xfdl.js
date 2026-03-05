(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmBottomsheet");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0","360","700",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("sta_POP_Modaldim");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","0",null,null,"293","0","0",null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_WF_Btsheet");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","16","24",null,"29","53",null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("타이틀");
            obj.set_cssclass("sta_WF_Txt19B");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","16","85",null,null,"16","128",null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button00","16",null,"160","48",null,"40",null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_text("버튼명");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,null,"160","48","16","40",null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("3");
            obj.set_text("버튼명");
            obj.set_cssclass("btn_WF_Crud01");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static01",null,null,"139","5","110","8",null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_BF_Indicator");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button01",null,"26","29","29","16",null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_POP_Cancel");
            this.PopupDiv00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.PopupDiv00.form
            obj = new Layout("default","",0,0,this.PopupDiv00.form,function(p){});
            this.PopupDiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",360,700,this,function(p){});
            obj.set_mobileorientation("landscape");
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

        };
        this.loadIncludeScript("cmmBottomsheet.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
