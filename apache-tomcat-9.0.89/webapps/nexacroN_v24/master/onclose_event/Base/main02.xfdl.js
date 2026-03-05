(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("main01");
            this.set_titletext("New Form");
            this.set_background("aqua");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebView("WebView00","41","35","1209","655",null,null,null,null,null,null,this);
            obj.set_taborder("0");
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
        this.registerScript("main02.xfdl", function() {

        this.main01_onbeforeclose = function(obj,e)
        {
        		//return "Main02을 닫으시겠습니까?";
        };

        this.Button00_onclick = function(obj,e)
        {
        	nexacro.open("modeless1", "Base::Popup02.xfdl",  null, "", "showtitlebar=true showontaskbar=true", 0, 0, 640, 480, this);
        	//nexacro.open("modeless1", "Base::Popup02.xfdl",  this.getOwnerFrame(), "", "showtitlebar=true showontaskbar=true", 0, 0, 640, 480, this);
        };

        this.main01_onload = function(obj,e)
        {
        	this.fnOnload();
        };
        this.fnOnload = function()
        {
        	this.setEventHandler("onactivate", this.form_onactivate, this)
        }


        this.form_onactivate = function(obj,e)
        {
        	var rtn  =this.getRandomInt(1, 10);
        	this.WebView00.url = "http://172.10.12.45:9090/CKEDITOR/editor/index.html?="+rtn;
        	this.transaction("svc1"+rtn,"http://172.10.12.45:9090/RP_102338_Service_Default_tree.jsp","","","","fnCallback",false)
        };
        this.getRandomInt = function (min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        this.fnCallback = function(a,b,c)
        {
        	trace("svc ID  = "+a);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onbeforeclose",this.main01_onbeforeclose,this);
            this.addEventHandler("onload",this.main01_onload,this);
        };
        this.loadIncludeScript("main02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
