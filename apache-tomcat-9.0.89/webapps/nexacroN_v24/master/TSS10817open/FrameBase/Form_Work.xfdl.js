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

            
            // UI Components Initialize
            obj = new Static("Static00","10","10","640","480",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("640x480");
            obj.set_background("aqua");
            this.addChild(obj.name, obj);

            obj = new Button("btn_open_300_300","40","120","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("open(300,300)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_showmodal_autosize_true","220","50","190","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("showModal(autosize=true)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_show_autosize_true","445","50","190","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("show(autosize=true)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_showmodal_autosize_false","220","120","180","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("showModal(autosize=false)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_show_autosize_false","440","120","180","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("show(autosize=false)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_open_no_size","25","185","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("open(サイズ指定なし)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_open","40","50","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("open(640,480)");
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
        this.registerScript("Form_Work.xfdl", function() {

        this.btn_open_onclick = function(obj,e)
        {
        	var	flag1 = "open1" ;
        	nexacro.open(flag1,"FrameBase::Child.xfdl",this.getOwnerFrame(),null,"showtitlebar=true showstatusbar=true", 0,0,640,480);
        };

        this.btn_open_300_300_onclick = function(obj,e)
        {
        	var	flag1 = "open1" ;
        	nexacro.open(flag1,"FrameBase::Child.xfdl",this.getOwnerFrame(),null,"showtitlebar=true showstatusbar=true autosize=true", 0,0,300,300);
        };

        this.btn_open_no_size_onclick = function(obj,e)
        {
        	var	flag1 = "open1" ;
        	nexacro.open(flag1,"FrameBase::Child.xfdl",this.getOwnerFrame(),null,"showtitlebar=true showstatusbar=true", 0,0);
        };

        this.btn_showmodal_autosize_true_onclick = function(obj,e)
        {
        	var objFrame = new ChildFrame();

        	objFrame.init( "modal00", 0, 0, 300, 300, null, null, "FrameBase::Child.xfdl" );
        	objFrame.autosize = true;

        	var vRtn = objFrame.showModal("modal00", this.getOwnerFrame());
        };

        this.btn_showmodal_autosize_false_onclick = function(obj,e)
        {
        	var objFrame = new ChildFrame();

        	objFrame.init( "modal01", 0, 0, 300, 300, null, null, "FrameBase::Child.xfdl" );
        	objFrame.autosize = false;

        	var vRtn = objFrame.showModal("modal01", this.getOwnerFrame(), null, this);
        };

        this.btn_show_autosize_true_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var objFrame = new ChildFrame();

        	objFrame.init( "modeless00", 0, 0, 300, 300, null, null, "FrameBase::Child.xfdl" );
        	objFrame.autosize = true;

        	objApp.mainframe.insertChild( 0, "modeless00", objFrame ) ;
        	objFrame.show();
        };

        this.btn_show_autosize_false_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var objFrame = new ChildFrame();

        	objFrame.init( "modeless01", 0, 0, 300, 300, null, null, "FrameBase::Child.xfdl" );
        	objFrame.autosize = false;

        	objApp.mainframe.insertChild( 0, "modeless01", objFrame ) ;
        	objFrame.show();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_open_300_300.addEventHandler("onclick",this.btn_open_300_300_onclick,this);
            this.btn_showmodal_autosize_true.addEventHandler("onclick",this.btn_showmodal_autosize_true_onclick,this);
            this.btn_show_autosize_true.addEventHandler("onclick",this.btn_show_autosize_true_onclick,this);
            this.btn_showmodal_autosize_false.addEventHandler("onclick",this.btn_showmodal_autosize_false_onclick,this);
            this.btn_show_autosize_false.addEventHandler("onclick",this.btn_show_autosize_false_onclick,this);
            this.btn_open_no_size.addEventHandler("onclick",this.btn_open_no_size_onclick,this);
            this.btn_open.addEventHandler("onclick",this.btn_open_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
