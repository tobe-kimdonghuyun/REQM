(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("work");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1646,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divForm","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Output");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divForm
            obj = new Layout("default","",0,0,this.divForm.form,function(p){});
            this.divForm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1646,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("work.xfdl", function() {
        this.menuInfo = {menuId: '10000', menuName: 'BMT-NEXACRO', menuUrl: ''};

        this.work_onload = function(obj,e)
        {
        	const app = nexacro.getApplication();
        	app.formWork = this;
        };

        this.loadMenuPage = function(menuId, menuUrl)
        {
        	this.divForm.set_url(menuUrl);

        	this.menuInfo = {
        		menuId: menuId,
        		menuName: nexacro.getApplication().gdsMenu.lookup("id", menuId, "caption"),
        		menuUrl: menuUrl
        	};
        };

        this.unloadMenuPage = function()
        {
        	this.divForm.set_url("");

        	this.menuInfo = {
        		menuId: '10000',
        		menuName: 'BMT-NEXACRO',
        		menuUrl: ''
        	};
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.work_onload,this);
        };
        this.loadIncludeScript("work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
