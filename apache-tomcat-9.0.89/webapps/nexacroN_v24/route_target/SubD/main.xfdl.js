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
            this.set_background("#f9eab7");
            this.getSetter("text").set("route_target : Sub System D");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","5","5",null,"60","5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("route_target : Sub System D main.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnFOO","35","104","335","136",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("call include\'s function");
            this.addChild(obj.name, obj);

            obj = new Static("strResult","36","243","334","47",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid silver");
            obj.set_wordWrap("english");
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
        this.addIncludeScript("main.xfdl","lib::test.xjs");
        this.registerScript("main.xfdl", function() {
        this.executeIncludeScript("lib::test.xjs"); /*include "lib::test.xjs"*/

        this.main_onload = function(obj,e)
        {
        	this.Static00.text = "route_target : Sub System D main.xfdl : "+`loaded from ${this._url}`;
        };

        this.btnFOO_onclick = function(obj,e)
        {
        	this.strResult.text = '';
        	try {
        		this.FOO();
        	}
        	catch (e) {
        		this.strResult.text = e.message;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.main_onload,this);
            this.btnFOO.addEventHandler("onclick",this.btnFOO_onclick,this);
        };
        this.loadIncludeScript("main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
