(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("dialog_test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","50","30","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","50","175","375","270",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","50","107","193","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("a");
            obj.set_text("a");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Phone_screen",480,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("RP_101530_dialog_test.xfdl", function() {

        this.Grid00_oncellclick = function(obj,e)
        {
        	varRet = this.FileDialog00.open( "FileOpen", FileDialog.LOAD );

        };

        this.Button00_onclick = function(obj,e)
        {
        	varRet = this.FileDialog00.open( "FileOpen", FileDialog.LOAD );

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
        };
        this.loadIncludeScript("RP_101530_dialog_test.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
