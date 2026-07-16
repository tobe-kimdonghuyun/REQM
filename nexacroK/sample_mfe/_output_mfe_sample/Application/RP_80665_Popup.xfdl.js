(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("showmodal_popup");
            this.set_titletext("Display popup by showmodal");
            this.getSetter("classname").set("popup_test2");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(300,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","35","25","174","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("dataset 카피");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","30","120","179","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("SaveXml");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",300,300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_80665_Popup.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        	this.Dataset00.copyRow(0,nexacro.getApplication().gds_da,0);
        };

        this.Button01_onclick = function(obj,e)
        {
        	alert(this.Dataset00.saveXML());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.showmodal_popup_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };

        this.loadIncludeScript("RP_80665_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
