(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("topFrame");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,80);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"80","0",null,"1300",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_formscrolltype("none");
            obj.set_background("aliceblue");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("staHome","0","12","140","52",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_cssclass("img_MF_Logo");
            obj.set_image("url(\'theme://images//sta_TF_ci.png\')");
            obj.set_accessibilityaction("투비소프트 로고 메인으로 이동");
            obj.set_accessibilityrole("button");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divTopMenu","256","14","554","55",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_accessibilitylabel("메뉴영역");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("Button00","26","12","87","31",null,null,null,null,null,null,this.divTop.form.divTopMenu.form);
            obj.set_taborder("0");
            obj.set_text("메뉴1");
            this.divTop.form.divTopMenu.addChild(obj.name, obj);

            obj = new Button("Button01","190","12","87","31",null,null,null,null,null,null,this.divTop.form.divTopMenu.form);
            obj.set_taborder("1");
            obj.set_text("메뉴2");
            this.divTop.form.divTopMenu.addChild(obj.name, obj);

            obj = new Button("Button02","354","12","87","31",null,null,null,null,null,null,this.divTop.form.divTopMenu.form);
            obj.set_taborder("2");
            obj.set_text("메뉴3");
            this.divTop.form.divTopMenu.addChild(obj.name, obj);

            obj = new Edit("edtSearchTop",null,"16","300","50","2",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_TF_search");
            obj.set_displaynulltext("검색어를 입력하세요.");
            obj.set_accessibilitydescription("검색어 입력");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"24","35","35","5",null,null,null,null,null,this.divTop.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_TF_search");
            obj.set_accessibilitylabel("검색");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divMenu","0","80",null,"200","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_TF_NaviBG");
            obj.set_visible("false");
            obj.set_background("linen");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("stcMenu","86.00","28","166","47",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("0");
            obj.set_text("PRODUCT");
            obj.set_cssclass("img_MF_Txt28px");
            obj.set_accessibilitydescription("메뉴");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("Static01","278","20","6",null,null,"20",null,null,null,null,this.divMenu.form);
            obj.set_taborder("1");
            obj.set_border("0px none, 1px solid #e2e2e6, 0px none, 0px none");
            obj.set_accessibilityenable("false");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("Static02","513","20","6",null,null,"20",null,null,null,null,this.divMenu.form);
            obj.set_taborder("2");
            obj.set_border("0px none, 1px solid #e2e2e6, 0px none, 0px none");
            obj.set_accessibilityenable("false");
            this.divMenu.addChild(obj.name, obj);

            obj = new Static("Static03","749","20","6",null,null,"20",null,null,null,null,this.divMenu.form);
            obj.set_taborder("3");
            obj.set_border("0px none, 1px solid #e2e2e6, 0px none, 0px none");
            obj.set_accessibilityenable("false");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("Button00","302","34","203","43",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("4");
            obj.set_text("서브메뉴 1");
            this.divMenu.addChild(obj.name, obj);

            obj = new Button("Button00_00","302","97","203","43",null,null,null,null,null,null,this.divMenu.form);
            obj.set_taborder("5");
            obj.set_text("서브메뉴 2");
            this.divMenu.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop.form.divTopMenu.form
            obj = new Layout("default","",0,0,this.divTop.form.divTopMenu.form,function(p){});
            this.divTop.form.divTopMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMenu.form
            obj = new Layout("default","",0,0,this.divMenu.form,function(p){});
            this.divMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,80,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("topFrame.xfdl", function() {

        this.Button_onclick = function(obj,e)
        {
        	this.parent.parent.divTop.height = 280;
        	this.divMenu.set_visible(true);
        };

        this.divMenu_onkillfocus = function(obj,e)
        {
        	this.parent.parent.divTop.height = 80;
        	this.divMenu.set_visible(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divTop.form.staHome.addEventHandler("onclick",this.divTop_staHome_onclick,this);
            this.divTop.form.divTopMenu.form.Button00.addEventHandler("onclick",this.Button_onclick,this);
            this.divTop.form.divTopMenu.form.Button01.addEventHandler("onclick",this.Button_onclick,this);
            this.divTop.form.divTopMenu.form.Button02.addEventHandler("onclick",this.Button_onclick,this);
            this.divMenu.addEventHandler("onkillfocus",this.divMenu_onkillfocus,this);
        };
        this.loadIncludeScript("topFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
