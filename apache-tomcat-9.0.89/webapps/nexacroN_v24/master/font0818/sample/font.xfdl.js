(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("font");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,960);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta00_00","5","20","590","300",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("가나다라마바사아자차카타파하\r\n갈날달랄말발\r\n투비소프트 폰트 테스트\r\n\r\n0123456789\r\n\r\nABCDEFGHIJKLMNOPQRSTUVWXYZ\r\nabcdefghijklmnopqrstuvwxyz");
            obj.set_cssclass("sta_M13");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","425","10","590","300",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("가나다라마바사아자차카타파하\r\n갈날달랄말발\r\n투비소프트 폰트 테스트\r\n\r\n0123456789\r\n\r\nABCDEFGHIJKLMNOPQRSTUVWXYZ\r\nabcdefghijklmnopqrstuvwxyz");
            obj.set_cssclass("sta_B13");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","30","350","400","300",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("가나다라마바사아자차카타파하\r\n갈날달랄말발\r\n투비소프트 폰트 테스트\r\n\r\n0123456789\r\n\r\nABCDEFGHIJKLMNOPQRSTUVWXYZ\r\nabcdefghijklmnopqrstuvwxyz");
            obj.set_cssclass("test_noto400");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","460","360","400","300",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("가나다라마바사아자차카타파하\r\n갈날달랄말발\r\n투비소프트 폰트 테스트\r\n\r\n0123456789\r\n\r\nABCDEFGHIJKLMNOPQRSTUVWXYZ\r\nabcdefghijklmnopqrstuvwxyz");
            obj.set_cssclass("test_noto700");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","30","650","400","300",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("가나다라마바사아자차카타파하\r\n갈날달랄말발\r\n투비소프트 폰트 테스트\r\n\r\n0123456789\r\n\r\nABCDEFGHIJKLMNOPQRSTUVWXYZ\r\nabcdefghijklmnopqrstuvwxyz");
            obj.set_cssclass("test_Pre400");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00","540","640","400","300",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("가나다라마바사아자차카타파하\r\n갈날달랄말발\r\n투비소프트 폰트 테스트\r\n\r\n0123456789\r\n\r\nABCDEFGHIJKLMNOPQRSTUVWXYZ\r\nabcdefghijklmnopqrstuvwxyz");
            obj.set_cssclass("test_Pre700");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,960,this,function(p){});
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
        this.loadIncludeScript("font.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
