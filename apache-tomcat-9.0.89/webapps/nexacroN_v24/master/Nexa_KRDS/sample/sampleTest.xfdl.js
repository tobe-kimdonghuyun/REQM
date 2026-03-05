(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleTest");
            this.set_titletext("New Form");
            this.set_stepitemsize("50");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"},{"id" : "Column5","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "1"},{"Column0" : "2"},{"Column0" : "3"},{"Column0" : "4"},{"Column0" : "5"},{"Column0" : "6"},{"Column0" : "7"},{"Column0" : "8"},{"Column0" : "9"},{"Column0" : "0"},{"Column0" : "1"},{"Column0" : "2"},{"Column0" : "3"},{"Column0" : "4"},{"Column0" : "5"},{"Column0" : "6"},{"Column0" : "7"},{"Column0" : "8"},{"Column0" : "9"},{"Column0" : "0"},{"Column0" : "12"},{"Column0" : "3"},{"Column0" : "4"},{"Column0" : "5"},{"Column0" : "6"},{"Column0" : "78"},{"Column0" : "9"},{"Column0" : "0-"},{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","24","28","406","392",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00_00","24","444","406","392",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds00");
            obj.set_positionstep("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"39\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_stepcount("2");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("sampleTest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
