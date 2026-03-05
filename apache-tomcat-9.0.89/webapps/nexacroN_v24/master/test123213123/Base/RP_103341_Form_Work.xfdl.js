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
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">정상</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">휴무</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","135","74","434","426",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"175\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"매장운영\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" combodataset=\"Dataset01\" combocodecol=\"Column0\" combodatacol=\"Column1\" displaytype=\"combocontrol\" edittype=\"combo\"/></Band></Format></Formats>");
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
        this.registerScript("RP_103341_Form_Work.xfdl", function() {

        this.Form_Work_onload = function(obj,e)
        {
        		this.Grid00.mergeCell(0,0,0,2);
        	this.Grid00.mergeCell(0,0,3,5);
        	this.Grid00.mergeCell(0,0,6,8);
        	this.Grid00.mergeCell(0,0,9,11);
        	this.Grid00.mergeCell(0,0,12,14);
        	this.Grid00.mergeCell(0,0,15,17);
        	this.Grid00.mergeCell(0,0,18,23);
        	//this.Grid00.mergeCell(0,0,21,23);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
        };
        this.loadIncludeScript("RP_103341_Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
