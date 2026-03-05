(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testFileDownFransfer");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","546.00","55","155","70",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("FileDownTransfer");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","541.00","150","211","89",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("nexacro._BrowserVersion");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","543.00","279","177","81",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("nexacro._Browser");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","64.00","43","196","69",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("maskeditTest");
            obj.set_background("yellow");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","50","148","255","87",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","57","279","255","87",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_format("999,999,999");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","387","57","59","41",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_103257_testMask.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.FileDownTransfer00.set_url("http://tech.tobesoft.com:8080/temp/ori/upload/NexacroWKWebViewDelegate.zip");
        	this.FileDownTransfer00.download();
        };

        this.Button01_onclick = function(obj,e)
        {
        	alert("test : " + nexacro._BrowserVersion);
        };

        this.Button02_onclick = function(obj,e)
        {
        	alert("test : " + nexacro._Browser);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("RP_103257_testMask.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
