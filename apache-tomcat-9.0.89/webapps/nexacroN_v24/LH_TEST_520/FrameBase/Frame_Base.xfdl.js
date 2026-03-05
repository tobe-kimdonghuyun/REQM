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
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staTopLink","0","0","0","0",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("바로가기메뉴");
            this.addChild(obj.name, obj);

            obj = new Div("divTopLink","0","0",null,"0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnGo","50","30","120","50",null,null,null,null,null,null,this.divTopLink.form);
            obj.set_taborder("0");
            obj.set_text("본문바로가기");
            this.divTopLink.addChild(obj.name, obj);

            obj = new Div("divTop","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_accessibilityenable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,null,"0","0",null,null,null,null,this.divTop.form);
            obj.set_taborder("0");
            obj.set_accessibilityenable("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btnBack","10","10","60","60",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_accessibilitydescription("뒤로가기");
            obj.set_text("<");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("staLogo","129","23","222","35",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("2");
            obj.set_text("주거급여플러스");
            obj.set_accessibilitydescription("메인으로 이동");
            obj.set_accessibilitylabel("주거급여플러스");
            obj.set_accessibilityrole("heading1");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divWork","0","divTop:0","480",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("FrameBase::frmMenu.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTopLink.form
            obj = new Layout("default","",0,0,this.divTopLink.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            this.divTopLink.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWork
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",480,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","FrameBase::frmMenu.xfdl");
        };
        
        // User Script
        this.registerScript("Frame_Base.xfdl", function() {

        this.divTop_btnBack_onclick = function(obj,e)
        {
        	this.parent.form.divWork.url = "FrameBase::frmMenu.xfdl";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.divTop.form.btnBack.addEventHandler("onclick",this.divTop_btnBack_onclick,this);
        };
        this.loadIncludeScript("Frame_Base.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
