(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testDiasostep");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","50","228","100",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("test");
            obj.set_font("normal 50pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","100","190","200","89",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "1"},{"datacolumn" : "2","codecolumn" : "2"},{"codecolumn" : "3","datacolumn" : "3"},{"datacolumn" : "4","codecolumn" : "4"}]});
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,720,this,function(p){});
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_104031_testDiasostep.xfdl", function() {

        this.Static00_onclick = function(obj,e)
        {
        	trace("test : " + this.getStepIndex());

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("RP_104031_testDiasostep.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
