(function()
{
    return function(nexacro, system, trace, environment, application)
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NexaN");
            this.set_titletext("New Form");
            if (nexacro.Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new nexacro.Dataset("Dataset00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [{"id" : "Column0","size" : "256","type" : "STRING"},{"id" : "Column1","size" : "256","type" : "STRING"}]},"Rows" : [{"Column0" : "0","Column1" : "0"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"},{"Column0" : "1","Column1" : "1"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new nexacro.Button("Button00","68","51","302","69",null,null,null,null,null,null,this);
            obj.set_background("yellow");
            obj.set_taborder("0");
            obj.set_text("deleteContentsCol");
            this.addChild(obj.name, obj);

            obj = new nexacro.Button("Button01","67","195","313","65",null,null,null,null,null,null,this);
            obj.set_background("pink");
            obj.set_taborder("1");
            obj.set_text("appendContentsCol");
            this.addChild(obj.name, obj);

            obj = new nexacro.Grid("Grid00","410","37","544","273",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column band=\"left\" size=\"45\"/><Column band=\"left\" size=\"45\"/><Column band=\"left\" size=\"45\"/><Column band=\"left\" size=\"45\"/><Column size=\"45\"/><Column size=\"45\"/><Column size=\"85\"/></Columns><Rows><Row band=\"head\" size=\"32\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"1\"/><Cell col=\"1\" text=\"2\"/><Cell col=\"2\" text=\"3\"/><Cell col=\"3\" text=\"4\"/><Cell col=\"4\" text=\"5\"/><Cell col=\"5\" text=\"6\"/><Cell col=\"6\" text=\"7\"/></Band><Band id=\"body\"><Cell expr=\"expr:rowidx+1\"/><Cell col=\"1\" text=\"bind:MNGT_PART_NAME\"/><Cell col=\"2\" text=\"bind:STNT_NUMB\"/><Cell col=\"3\" text=\"bind:KORN_NAME\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"bind:STAF_NAME\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new nexacro.Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_103505_NexaN.xfdl", function(nexacro, system, trace, environment, application) {
        this.Button00_onclick = function(obj, e)
        {
        	this.Grid00.set_enableredraw(false);
        	var colCount = this.Grid00.getCellCount("head");
            for (var i = colCount - 1; i >= 0; i--) {
                this.Grid00.deleteContentsCol(i);
            }
            this.Grid00.set_enableredraw(true);
           trace(this.Grid00.getCurFormatString(false));
        }

        this.Button01_onclick = function(obj, e)
        {
        	for (var i = 0; i < 10 ; i++)
        	{
        		this.Grid00.appendContentsCol();
        	}
        	 trace(this.Grid00.getCurFormatString(false));

        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };

        this.loadIncludeScript("RP_103505_NexaN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
