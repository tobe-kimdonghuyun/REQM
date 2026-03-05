(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("left");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(273,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divSubMenu","0","0","273",null,null,"22",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","290","64","273","52",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("좌측메뉴버튼");
            obj.set_cssclass("btn_LF_Menu");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","290","124","273","52",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("좌측메뉴버튼");
            obj.set_cssclass("btn_LF_MenuS");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSubMenu.form
            obj = new Layout("default","",0,0,this.divSubMenu.form,function(p){});
            this.divSubMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",273,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("left.xfdl", function() {
        this.selectedMenuButtonId = "";
        this.first_menuId;

        /*
         *	left 온로드
         */
        this.left_onload = function(obj,e)
        {
        	this.createSubMenuButton(10000);
        };

        this.createSubMenuButton = function(upperMenuId)
        {
        	const app=nexacro.getApplication();
        	let left	= 10;
        	let top		= 10;
        	//let width	= 273;
        	let height	= 50;
        	let right	= 10;
        	let vGap	= 20;

        	app.gdsMenu.filter("level==1&&upid=='" + upperMenuId + "'");

        	for (let i=0, len=app.gdsMenu.rowcount; i<len; i++) {
        		let menuId = app.gdsMenu.getColumn(i, "id"),
        			id = "btnMenu_"+menuId,
        			button = new Button(id, left, top, null, height, right, null);

        		button.set_cssclass("btn_LF_Menu");
        		button.set_text(app.gdsMenu.getColumn(i, "caption"));
        		button.menuId = menuId;
        		button.menuUrl = app.gdsMenu.getColumn(i, "url");
        		button.set_tooltiptext(app.gdsMenu.getColumn(i, "tooltiptext"));
        		button.addEventHandler("onclick", this.btnMenu_onclick, this);
        		this.divSubMenu.addChild(id, button);
        		button.show();

        		top += height + vGap;

        		if(i==0) this.first_menuId = id;
        	}
        };

        this.btnMenu_onclick = function(obj,e)
        {
        	const p = this.parent.parent;
        	let menuId = obj.menuId;
        	let menuUrl = obj.menuUrl;
        	p["showMenuPage"].call(p, menuId, menuUrl);

        // 	if(this.selectedMenuButtonId) this.divSubMenu.form.components[this.selectedMenuButtonId].cssclass = "btn_LF_Lmenu";
        // 	obj.set_cssclass("btn_LF_LmenuS");

        	this.selectedMenuButtonId = obj.name;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.left_onload,this);
        };
        this.loadIncludeScript("left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
