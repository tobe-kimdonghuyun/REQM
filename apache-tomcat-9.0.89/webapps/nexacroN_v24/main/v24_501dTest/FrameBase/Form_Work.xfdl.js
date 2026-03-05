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
                this._setFormPosition(1300,1090);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","71","45","839","72",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("방향키로 이동 시 button의 accessibilityenable=false인 경우 text를 읽어주는 현상.\r\ntab키로 이동 시 accessibilityenable=false인 버튼에 포커스가 가는 현상.");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","65","161","290","109",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("접근성 false");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","60","296","314","108",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("접근성 true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1300,1090,this,function(p){});
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
            this.addEventHandler("onload",this.Form_Work_onload,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
