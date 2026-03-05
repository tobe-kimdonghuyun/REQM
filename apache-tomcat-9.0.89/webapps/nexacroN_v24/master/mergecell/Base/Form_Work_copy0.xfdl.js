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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","36","53","386","194",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","466","63","242","72",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work_copy0.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.transaction("svcid","http://172.10.12.45:9090/RP_88938_tr_test1.xml","","Dataset00=userInfo","","fn_callback")
        };
        this.fn_callback = function(a,b,c)
        {
        	trace(a+","+b+","+c);
        	this.Grid00.createFormat();
        	trace(this.Dataset00.saveXML());
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Work_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
