(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("N375254");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"},{"Column0" : "1","Column1" : "2"},{"Column0" : "3","Column1" : "4"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","80","70","141","69",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("팝업");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","161","225","146","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button02","176","280","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button02");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_79242_N375254.xfdl", function(nexacro, system, trace, environment, application) {

        this.Button00_onclick = function(obj,e)
        {
        	nexacro.open("modeless", "Application::RP_79242_Test_copy.xfdl", this.getOwnerFrame(), "", "showtitlebar=true showstatusbar=false", 0, 0);
        };

        this.Button01_onclick = function(obj,e)
        {
        	nexacro.getApplication().mainframe.set_showtitlebar(false);
        };

        this.Button02_onclick = function(obj,e)
        {
        	nexacro.getApplication().mainframe.set_showtitlebar(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Dataset00.addEventHandler("onrowposchanged",this.Dataset00_onrowposchanged,this);
        };

        this.loadIncludeScript("RP_79242_N375254.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
