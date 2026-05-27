(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("main");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","115","115","315","137",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("팝업(쇼모달)");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","113","270","314","107",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("팝업(모달리스)");
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
        this.registerScript("main.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	var objFrame = new ChildFrame();
        	var objParentFrame = this.getOwnerFrame();

        	objFrame.init( "modal00", 0, 0, 500, 500 );
        	objFrame.set_formurl( "Base::pop.xfdl" );

        	var vRtn = objFrame.showModal( objParentFrame, "", this, "" );

        };

        this.Button01_onclick = function(obj,e)
        {
        	nexacro.open("modeless", "Base::pop.xfdl",  this.getOwnerFrame(), "", "showtitlebar=true showstatusbar=false", 0, 0, 640, 480, this, "location=true menubar=true toolbar=true");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
